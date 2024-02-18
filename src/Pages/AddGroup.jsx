import { useContext } from "react";
import { TextBox, CheckBox, Button } from "../Components/Inputs";
import EntryCard, { EntryCardFooter, EntryCardTab, EntryCardWithTabs } from "../Includes/EntryCard";
import { InputContext } from "../Components/InputContextProvider";
import { msg4apicall } from "../CommonFunctions";
import useLoading from "../Components/useLoading";
import AlertBox from "../Components/AlertBox";

export function AddGroup() {
    const { InputValues } = useContext(InputContext);
    var [setLoadingCount] = useLoading()
    function SubmitAddGroup() {
        msg4apicall({
            CreateGroupInfoRqst: {
                LoginToken: "185a1e6516dd4f8a80a4ebcc7748212ba5ded331ed90406c94d520ec51e5ad76",
                GroupName: InputValues.GroupName,
                GroupCode: InputValues.GroupCode,
                IsActive: InputValues.IsActive ? 1 : 0,
                UpdatedBy: "Titus"
            }
        }, setLoadingCount).then(data => console.log(data.Response))
    }


    return (
        <EntryCard Name="Add Group" >
            <TextBox Id="GroupName" Label="Group Name" Placeholder="Group Name" Required Value="test" />
            <TextBox Id="GroupCode" Label="Group Code" Placeholder="Group Code" Required Value="Test1" />
            <CheckBox Id="IsActive" Label="Is Active" Placeholder="Is Active" Required Value={true} />
            <EntryCardFooter>
                <Button Id="Close" ClassName={"btn-danger"} Label={"Close"} OnClick={() => window.close()} Value={"close"} />
                <Button Id="Update" ClassName={"btn-primary"} Label={"Update"} OnClick={SubmitAddGroup} />
            </EntryCardFooter>
            <AlertBox message="This is a sample alert!" type="info" />
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