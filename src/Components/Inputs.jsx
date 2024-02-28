import { useContext, useEffect } from "react";
import { InputContext } from "../Components/InputContextProvider";
import { TableContext } from "./TableContextProvider";

export function TextBox({ Id, Label, Value = "", Placeholder, Required, Width = 250, Filter }) {
    const { InputValues, SetInputValueChange } = useContext(InputContext);
    // eslint-disable-next-line
    useEffect(() => SetInputValueChange(Id, Value), []);

    return (
        <div className={Filter ? "form-group Rfilter" : "form-group"}>
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
                value={InputValues[Id] !== undefined ? InputValues[Id] : Value} // Use Value as the default value
                onChange={e => SetInputValueChange(Id, e.target.value)}
            />
        </div>
    );
}
export function CheckBox({ Id, Label, Value=false, Placeholder, Required, Width = 250 }) {
    const { InputValues, SetInputValueChange } = useContext(InputContext);
    // eslint-disable-next-line
    useEffect(e => SetInputValueChange(Id, Value), [])

    return (
        <div className="form-group">
            <div className="icheck-primary d-inline">
                <input
                    type="checkbox"
                    id={Id}
                    defaultValue={InputValues[Id] !== undefined ? InputValues[Id] : Value}
                    name={Id}
                    onChange={e => SetInputValueChange(Id, e.target.checked)}
                    checked={InputValues[Id] !== undefined ? InputValues[Id] : Value}
                />
                <input
                    type="hidden"
                    defaultValue={InputValues[Id] !== undefined ? InputValues[Id] : Value}
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
export function FilterButton({ Id="FilterSearchButton", Label="Search", Value="Update", ClassName = "btn-primary", OnClick }) {
    const { setCurrentPage } = useContext(TableContext);

    return (
        <div className="form-group Rfilter">
            <label>&nbsp;</label>
            <div className="input-group">
                <button
                    type="submit"
                    id={Id}
                    className={"btn " + ClassName}
                    value={Value}
                    onClick={()=>{setCurrentPage(1); OnClick();}}>
                    {Label}
                </button>
            </div>
        </div>
    );
}
