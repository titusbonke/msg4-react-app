import { useContext, useEffect } from "react";
import { InputContext } from "../Components/InputContextProvider";

export function TextBox({ Id, Label,Value="", Placeholder, Required, Width = 250 }) {
    const { InputValues, SetInputValueChange, resetInputValues } = useContext(InputContext);
    // useEffect(e=>SetInputValueChange(Id, Value),[])
    const handleChange = (event) => {
        SetInputValueChange(Id, event.target.value);
    };
    
    // Handle the case when InputValues[Id] is undefined
    // const value = InputValues[Id] || '';
    // InputValues[Id]=Value;
    return (
        <div className="form-group">
            <label htmlFor={Id}>
                {Label}{Required ? <span style={{ color: "red" }}> *</span> : ""}
            </label>
            <input
                id={Id}
                name={Id}
                type="text"
                style={{ width: Width }}
                className="form-control"
                placeholder={Placeholder}
                value={InputValues[Id] || Value} // Use the value variable here
                onChange={handleChange}
            />
        </div>
    );
}
export function CheckBox({ Id, Label, Value, Placeholder, Required, Width = 250 }) {
    return (
        <div className="form-group">
            <div className="icheck-primary d-inline">
                <input
                    type="checkbox"
                    id={Id}
                    defaultValue={Value}
                    name={Id}
                    defaultChecked={Value}
                />
                <input
                    type="hidden"
                    defaultValue={Value}
                    id={Id}
                    name={Id}
                />
                <label htmlFor={Id}>{Label} {Required ? <span style={{ color: "red" }}> *</span> : ""}</label>
            </div>
        </div>

    );
}
export function Button({ Id, Label, Value, ClassName = "btn-primary", OnClick }) {
    return (
        <button
            id={Id}
            type="button"
            value={Value}
            onClick={OnClick}
            className={"btn " + ClassName + " mr-3"}
        >
            {Label}
        </button>

    );
}
