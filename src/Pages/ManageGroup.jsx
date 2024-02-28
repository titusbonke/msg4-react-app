import { useContext, useEffect, useState } from "react";
import FilterBar from "../Components/FilterBar";
import { FilterButton, TextBox } from "../Components/Inputs";
import PageHeader from "../Components/PageHeader";
import { TableData, TableHeader, TableLayout, TableRow } from "../Components/Table";
import { msg4apicall } from "../CommonFunctions";
import useLoading from "../Components/useLoading";
import { ShowAlertBox } from "../Components/AlertBox";
import { InputContext } from "../Components/InputContextProvider";
const RowsPerPage = 10;
function ManageGroup() {
    var [setLoadingCount] = useLoading()
    const [Data, setData] = useState();
    const { InputValues } = useContext(InputContext);
    const [CurrentPage, setCurrentPage] = useState(1);
    const [SortOrder, setSortOrder] = useState(0);
    const [SortField, setSortField] = useState("");

    useEffect(() => {
        RenderReport();
        // eslint-disable-next-line
    }, [CurrentPage,SortField,SortOrder]);

    function RenderReport() {
        msg4apicall({
            ReadGroupInfoListRqst: {
                PageReportRqst: {
                    EndDate: "",
                    QuickSearch: "",
                    RowsPerPage: RowsPerPage,
                    SortField: SortField,
                    SortOrder: SortOrder,
                    StartDate: "",
                    StartPage: CurrentPage
                },
                LoginToken: "185a1e6516dd4f8a80a4ebcc7748212ba5ded331ed90406c94d520ec51e5ad76",
                GroupName: InputValues.GroupName,
                IsActive: 1,
                GroupCode: InputValues.GroupCode,
            }
        }, setLoadingCount).then(data => {
            if (data.PageReportRspn.Response !== "OK") return ShowAlertBox(data.Response, "danger");
            setData(data.PageReportRspn);
        })
    }

    return (<>
        <PageHeader pageName="Manage Group" parentPagesArray={[{ name: "Home", url: "/dashboard" }, { name: "Master" }]} />
        <FilterBar OnEnterPress={RenderReport}>
            <TextBox Id="GroupName" Label="Group Name" Placeholder="Group Name" Filter Width="200px" />
            <TextBox Id="GroupCode" Label="Group Code" Placeholder="Group Code" Filter Width="200px" />
            <FilterButton OnClick={RenderReport} />
        </FilterBar>
        <TableLayout RowsPerPage={RowsPerPage} TotalRows={Data?.TotalRows} CurrentPage={CurrentPage} setCurrentPage={setCurrentPage} SortOrder={SortOrder} setSortOrder={setSortOrder} SortField={SortField} setSortField={setSortField} >
            <TableHeader Sortable={false} />
            <TableHeader Name="Group Name" />
            <TableHeader Name="Group Code" />
            <TableHeader Name="Edit" Sortable={false} />
            {
                Data != null &&
                Data.ObjectData.map((item, index) =>
                    <TableRow key={index}>
                        <TableData iconClass={"fas fa-tags"} textAlign="center" width={50} />
                        <TableData text={item.GroupName} width={"auto"} />
                        <TableData text={item.GroupCode} width={250} />
                        <TableData iconClass={"fas fa-edit"} textAlign="center" isPopUp url={"/Master/AddGroup/" + item.GroupGuid} popUpHeight={window.screen.availHeight} width={60} />
                    </TableRow>
                )
            }
        </TableLayout>
    </>);
}

export default ManageGroup;