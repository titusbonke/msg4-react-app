import { useContext, useEffect } from "react";
import { TextBox, CheckBox, Button } from "../Components/Inputs";
import EntryCard, { EntryCardFooter, EntryCardTab, EntryCardWithTabs } from "../Includes/EntryCard";
import { InputContext } from "../Components/InputContextProvider";
import { msg4apicall } from "../CommonFunctions";
import useLoading from "../Components/useLoading";
import { ShowAlertBox } from "../Components/AlertBox";
import { useParams } from "react-router-dom";

export function AddContact() {
    const { InputValues, SetInputValueChange } = useContext(InputContext);
    var [setLoadingCount] = useLoading()
    const { id } = useParams();

    // useEffect(a => {
    //     if (id) {
    //         msg4apicall({
    //             ReadGroupInfoRqst: {
    //                 LoginToken: "185a1e6516dd4f8a80a4ebcc7748212ba5ded331ed90406c94d520ec51e5ad76",
    //                 GroupGuid: id,
    //             }
    //         }, setLoadingCount).then(data => {
    //             if (data.Response !== "OK") return ShowAlertBox(data.Response, "danger");
    //             SetInputValueChange("GroupName", data.GroupInfo.GroupName);
    //             SetInputValueChange("GroupCode", data.GroupInfo.GroupCode);
    //             SetInputValueChange("IsActive", data.GroupInfo.IsActive);
    //         })
    //     }
    // }, [])

    function SubmitAddContact() {
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
            <div class="form-group">
                <label for="ContactType">Type</label>
                <div class="input-group">
                    <select id="ContactType" style={{width:"250px"}} name="ContactType" class="form-control select2 select2-hidden-accessible" data-placeholder="Select" data-select2-id="ContactType" tabindex="-1" aria-hidden="true">
                        <option value="Single" selected="selected" data-select2-id="2">Single</option>
                        <option value="Multiple" data-select2-id="32">Multiple</option>
                    </select><span class="select2 select2-container select2-container--default select2-container--below select2-container--focus" dir="ltr" data-select2-id="1" style={{width: "250px"}}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-ContactType-container"><span class="select2-selection__rendered" id="select2-ContactType-container" role="textbox" aria-readonly="true" title="Single">Single</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                </div>
            </div>
            <TextBox Id="GroupCode" Label="Group Code" Placeholder="Group Code" Required />
            <CheckBox Id="IsActive" Label="Is Active" Placeholder="Is Active" Required />
            <EntryCardFooter>
                <Button Id="Close" ClassName={"btn-danger"} Label={"Close"} OnClick={() => window.close()} Value={"close"} />
                <Button Id="Update" ClassName={"btn-primary"} Label={"Update"} OnClick={id ? SubmitUpdateGroup : SubmitAddContact} />
            </EntryCardFooter>
            {/* <AlertBox message="This is a sample alert!" type="info" /> */}
        </EntryCard >
    );
}
export default AddContact;