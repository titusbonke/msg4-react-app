import { useEffect, useState } from "react";
import FilterBar from "../Components/FilterBar";
import { FilterButton, TextBox } from "../Components/Inputs";
import PageHeader from "../Components/PageHeader";
import { TableData, TableHeader, TableLayout, TableRow } from "../Components/Table";
import { msg4apicall } from "../CommonFunctions";
import useLoading from "../Components/useLoading";
import { ShowAlertBox } from "../Components/AlertBox";

function ManageGroup() {
    var [setLoadingCount] = useLoading()
    const [Data, setData] = useState();

    useEffect(a => {
        msg4apicall({
            ReadGroupInfoListRqst: {
                PageReportRqst: {
                    EndDate: "",
                    QuickSearch: "",
                    RowsPerPage: 10,
                    SortField: "",
                    SortOrder: 0,
                    StartDate: "",
                    StartPage: 1
                },
                LoginToken: "185a1e6516dd4f8a80a4ebcc7748212ba5ded331ed90406c94d520ec51e5ad76",
                GroupName: "",
                IsActive: 1,
                GroupCode: ""
            }
        }, setLoadingCount).then(data => {
            if (data.PageReportRspn.Response !== "OK") return ShowAlertBox(data.Response, "danger");
            setData(data.PageReportRspn);
        })
    }, [])

    return (<>
        <PageHeader pageName="Manage Group" parentPagesArray={[{ name: "Home", url: "/dashboard" }, { name: "Master" }]} />
        <FilterBar>
            <TextBox Id="GroupName" Label="Group Name" Placeholder="Group Name" Value="test" Filter Width="200px" />
            <FilterButton />
        </FilterBar>
        <TableLayout TotalRows={10}>
            <TableHeader />
            <TableHeader Name="Group Code" />
            <TableHeader Name="Group Name" />
            <TableHeader Name="Edit" Sortable={false} />
            {
                Data !=null &&
                  Data.ObjectData.map((item, index) =>( 
                    <TableRow key={index}>
                        <TableData iconClass={"fas fa-tags"} textAlign="center" width={50} />
                        <TableData text={item.GroupName} width={250} />
                        <TableData text={item.GroupCode} width={"auto"} />
                        <TableData iconClass={"fas fa-edit"} textAlign="center" isPopUp url={"/Master/AddGroup/"+item.GroupGuid} popUpHeight={window.screen.availHeight} width={60} />
                    </TableRow>
                 )
                )
            }
        </TableLayout>
    </>);
}

export default ManageGroup;