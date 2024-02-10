import { TextBox, CheckBox, Button } from "../Components/Inputs";
import EntryCard, { EntryCardFooter, EntryCardTab, EntryCardWithTabs } from "../Includes/EntryCard";
export function AddGroup() {
    return (
        <EntryCard Name="Add Group" >
            <TextBox Id="GroupName" Label="Group Name" Placeholder="Group Name" Required Value={"test"} />
            <TextBox Id="GroupCode" Label="Group Code" Placeholder="Group Code" Required Value={"test"} />
            <CheckBox Id="IsActive" Label="Is Active" Placeholder="Is Active" Required />
            <EntryCardFooter>
                <Button Id="Close" ClassName={"btn-danger"} Label={"Close"} OnClick={() => window.close()} Value={"close"} />
                <Button Id="Update" ClassName={"btn-primary"} Label={"Update"} />
            </EntryCardFooter>
        </EntryCard>
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

export default TestPopup;