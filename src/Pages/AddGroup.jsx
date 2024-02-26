import { useContext, useEffect } from "react";
import { TextBox, CheckBox, Button } from "../Components/Inputs";
import EntryCard, { EntryCardFooter, EntryCardTab, EntryCardWithTabs } from "../Includes/EntryCard";
import { InputContext } from "../Components/InputContextProvider";
import { msg4apicall } from "../CommonFunctions";
import useLoading from "../Components/useLoading";
import { ShowAlertBox } from "../Components/AlertBox";
import { useParams } from "react-router-dom";

export function AddGroup() {
    const { InputValues, SetInputValueChange } = useContext(InputContext);
    var [setLoadingCount] = useLoading()
    const { id } = useParams();

    useEffect(a => {
        if (id) {
            msg4apicall({
                ReadGroupInfoRqst: {
                    LoginToken: "185a1e6516dd4f8a80a4ebcc7748212ba5ded331ed90406c94d520ec51e5ad76",
                    GroupGuid: id,
                }
            }, setLoadingCount).then(data => {
                if (data.Response !== "OK") return ShowAlertBox(data.Response, "danger");
                SetInputValueChange("GroupName", data.GroupInfo.GroupName);
                SetInputValueChange("GroupCode", data.GroupInfo.GroupCode);
                SetInputValueChange("IsActive", data.GroupInfo.IsActive);
            })
        }
    }, [])

    function SubmitAddGroup() {
        msg4apicall({
            CreateGroupInfoRqst: {
                LoginToken: "185a1e6516dd4f8a80a4ebcc7748212ba5ded331ed90406c94d520ec51e5ad76",
                GroupName: InputValues.GroupName,
                GroupCode: InputValues.GroupCode,
                IsActive: InputValues.IsActive ? 1 : 0,
                UpdatedBy: "Titus"
            }
        }, setLoadingCount).then(data => {
            // emptyInputFields()
            // SetInputValueChange("GroupName","abc")
            if (data.Response !== "OK") return ShowAlertBox(data.Response, "danger");
            ShowAlertBox(`Group ${InputValues.GroupName} has been Created.`);
        })
    }
    function SubmitUpdateGroup() {
        msg4apicall({
            UpdateGroupInfoRqst: {
                LoginToken: "185a1e6516dd4f8a80a4ebcc7748212ba5ded331ed90406c94d520ec51e5ad76",
                GroupGuid: id,
                GroupName: InputValues.GroupName,
                GroupCode: InputValues.GroupCode,
                IsActive: InputValues.IsActive ? 1 : 0,
                IsDeleted: 0,
                UpdatedBy: "Titus"
            }
        }, setLoadingCount).then(data => {
            if (data.Response !== "OK") return ShowAlertBox(data.Response, "danger");
            ShowAlertBox(`Group ${InputValues.GroupName} has been Updated.`);
        })
    }


    return (
        <EntryCard Name="Add Group" >
            <TextBox Id="GroupName" Label="Group Name" Placeholder="Group Name" Required />
            <TextBox Id="GroupCode" Label="Group Code" Placeholder="Group Code" Required />
            <CheckBox Id="IsActive" Label="Is Active" Placeholder="Is Active" Required />
            <EntryCardFooter>
                <Button Id="Close" ClassName={"btn-danger"} Label={"Close"} OnClick={() => window.close()} Value={"close"} />
                <Button Id="Update" ClassName={"btn-primary"} Label={"Update"} OnClick={id ? SubmitUpdateGroup :SubmitAddGroup } />
            </EntryCardFooter>
            {/* <AlertBox message="This is a sample alert!" type="info" /> */}
        </EntryCard >
    );
}

export function TestPopup() {
    return (
        <EntryCardWithTabs Name="Add Group" >
            <EntryCardTab Name="Tab a" Id={"tab1"} >
                <TextBox Id="GroupName" Label="Group Name" Placeholder="Group Name" Required Value={"test"} />
                <TextBox Id="GroupCode" Label="Group Code" Placeholder="Group Code" Required Value={"test"} />
                <CheckBox Id="IsActive" Label="Is Active" Placeholder="Is Active" Required />
                <EntryCardFooter>
                    <Button Id="Close" ClassName={"btn-danger"} Label={"Close"} OnClick={() => window.close()} Value={"close"} />
                    <Button Id="Update" ClassName={"btn-primary"} Label={"Update"} />
                </EntryCardFooter>
            </EntryCardTab>
            <EntryCardTab Name="Tab b" Id={"tab2"} >
                <TextBox Id="GroupName" Label="Group Name" Placeholder="Group Name" Required Value={"test"} />
                <TextBox Id="GroupCode" Label="Group Code" Placeholder="Group Code" Required Value={"test"} />
                <CheckBox Id="IsActive" Label="Is Active" Placeholder="Is Active" Required />
            </EntryCardTab>
        </EntryCardWithTabs>

    )
}

export default AddGroup;