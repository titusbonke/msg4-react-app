import {TextBox,CheckBox, Button} from "../Components/Inputs";
import EntryCard, { EntryCardFooter } from "../Includes/EntryCard";
function AddGroup() {
    return (
        <EntryCard>
            <TextBox Id="GroupName" Label="Group Name" Placeholder="Group Name" Required Value={"test"} />
            <TextBox Id="GroupCode" Label="Group Code" Placeholder="Group Code" Required Value={"test"} />
            <CheckBox Id="IsActive" Label="Is Active" Placeholder="Is Active" Required   />
            <EntryCardFooter>
                <Button Id="Close"  ClassName={"btn-danger"} Label={"Close"} OnClick={()=>window.close()} Value={"close"} />
                <Button Id="Update"  ClassName={"btn-primary"} Label={"Update"}   />
            </EntryCardFooter>
        </EntryCard>
    );
}

export default AddGroup;