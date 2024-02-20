import FilterBar from "../Components/FilterBar";
import { FilterButton, TextBox } from "../Components/Inputs";
import PageHeader from "../Components/PageHeader";
import TableHeader, { TableLayout } from "../Components/Table";

function ManageGroup() {
    return (<>
        <PageHeader pageName="Manage Group" parentPagesArray={[{ name: "Home", url: "/dashboard" }, { name: "Master" }]} />
        <FilterBar>
            <TextBox Id="GroupName" Label="Group Name" Placeholder="Group Name" Value="test" Filter Width="200px" />
            <FilterButton />
        </FilterBar>
        <TableLayout>
            <TableHeader />
            <TableHeader Name={"Group Code"} />
            <TableHeader Name={"Group Name"} />
            <TableHeader Name={"Edit"} Sortable={false} />
            <tbody>
                <tr>
                    <td
                        style={{
                            textAlign: "center",
                            border: "1px solid #d1d4d6",
                            padding: ".50rem .75rem",
                            width: 50
                        }}
                    >
                        <a
                            href="#"
                            onclick="javascript:window.open('/msg4/Master/AddGroup/@uWpoKX$UCftuKmBU7fJmWZ8oaHBxidKhPwYkW711C3CiGMmjJCRmCTTbObkVDIBu@','_blank','width=470,height=415,resizable=no,scrollbars=yes,toolbar=no,location=no,directories=no,status=no,menubar=no,copyhistory=no,pointer=yes');"
                            style={{ textDecoration: "none", color: "#000000" }}
                        >
                            <i
                                style={{ fontSize: 16, color: "#191970" }}
                                title=""
                                className="fas fa-tags"
                            />
                        </a>
                    </td>
                    <td
                        style={{
                            textAlign: "left",
                            border: "1px solid #d1d4d6",
                            padding: ".50rem .75rem",
                            width: 250
                        }}
                    >
                        {" "}
                        <a style={{ textDecoration: "none", color: "#000000" }}>
                            {" "}
                            Test1
                        </a>
                    </td>
                    <td
                        style={{
                            textAlign: "left",
                            border: "1px solid #d1d4d6",
                            padding: ".50rem .75rem",
                            width: "autopx"
                        }}
                    >
                        {" "}
                        <a style={{ textDecoration: "none", color: "#000000" }}>
                            {" "}
                        </a>
                    </td>
                    <td
                        style={{
                            textAlign: "center",
                            border: "1px solid #d1d4d6",
                            padding: ".50rem .75rem",
                            width: 60
                        }}
                    >
                        <a
                            href="#"
                            onclick="javascript:window.open('/msg4/Master/AddGroup/@uWpoKX$UCftuKmBU7fJmWZ8oaHBxidKhPwYkW711C3CiGMmjJCRmCTTbObkVDIBu@','_blank','width=470,height=415,resizable=no,scrollbars=yes,toolbar=no,location=no,directories=no,status=no,menubar=no,copyhistory=no,pointer=yes');"
                            style={{ textDecoration: "none", color: "#000000" }}
                        >
                            <i
                                className="fas fa-edit"
                                title="Edit"
                                style={{ fontSize: 16 }}
                            />
                        </a>
                    </td>
                </tr>
                <tr>
                    <td
                        style={{
                            textAlign: "center",
                            border: "1px solid #d1d4d6",
                            padding: ".50rem .75rem",
                            width: 50
                        }}
                    >
                        <a
                            href="#"
                            onclick="javascript:window.open('/msg4/Master/AddGroup/@spiIAwAeq$nERWGgdkwTjw5yvqoOJzwsks3o4lJmeOskAW4oQyVzpIuy3nZiOEx8@','_blank','width=470,height=415,resizable=no,scrollbars=yes,toolbar=no,location=no,directories=no,status=no,menubar=no,copyhistory=no,pointer=yes');"
                            style={{ textDecoration: "none", color: "#000000" }}
                        >
                            <i
                                style={{ fontSize: 16, color: "#191970" }}
                                title=""
                                className="fas fa-tags"
                            />
                        </a>
                    </td>
                    <td
                        style={{
                            textAlign: "left",
                            border: "1px solid #d1d4d6",
                            padding: ".50rem .75rem",
                            width: 250
                        }}
                    >
                        {" "}
                        <a style={{ textDecoration: "none", color: "#000000" }}>
                            {" "}
                            Test1
                        </a>
                    </td>
                    <td
                        style={{
                            textAlign: "left",
                            border: "1px solid #d1d4d6",
                            padding: ".50rem .75rem",
                            width: "autopx"
                        }}
                    >
                        {" "}
                        <a style={{ textDecoration: "none", color: "#000000" }}>
                            {" "}
                            a
                        </a>
                    </td>
                    <td
                        style={{
                            textAlign: "center",
                            border: "1px solid #d1d4d6",
                            padding: ".50rem .75rem",
                            width: 60
                        }}
                    >
                        <a
                            href="#"
                            onclick="javascript:window.open('/msg4/Master/AddGroup/@spiIAwAeq$nERWGgdkwTjw5yvqoOJzwsks3o4lJmeOskAW4oQyVzpIuy3nZiOEx8@','_blank','width=470,height=415,resizable=no,scrollbars=yes,toolbar=no,location=no,directories=no,status=no,menubar=no,copyhistory=no,pointer=yes');"
                            style={{ textDecoration: "none", color: "#000000" }}
                        >
                            <i
                                className="fas fa-edit"
                                title="Edit"
                                style={{ fontSize: 16 }}
                            />
                        </a>
                    </td>
                </tr>
                <tr>
                    <td
                        style={{
                            textAlign: "center",
                            border: "1px solid #d1d4d6",
                            padding: ".50rem .75rem",
                            width: 50
                        }}
                    >
                        <a
                            href="#"
                            onclick="javascript:window.open('/msg4/Master/AddGroup/@$hVa9KnN5wyCNdi8o95NqvdRP1xMGYXLbDiRbS458s4uXObK65qUjwqhcow5DMBX@','_blank','width=470,height=415,resizable=no,scrollbars=yes,toolbar=no,location=no,directories=no,status=no,menubar=no,copyhistory=no,pointer=yes');"
                            style={{ textDecoration: "none", color: "#000000" }}
                        >
                            <i
                                style={{ fontSize: 16, color: "#191970" }}
                                title=""
                                className="fas fa-tags"
                            />
                        </a>
                    </td>
                    <td
                        style={{
                            textAlign: "left",
                            border: "1px solid #d1d4d6",
                            padding: ".50rem .75rem",
                            width: 250
                        }}
                    >
                        {" "}
                        <a style={{ textDecoration: "none", color: "#000000" }}>
                            {" "}
                            Test1
                        </a>
                    </td>
                    <td
                        style={{
                            textAlign: "left",
                            border: "1px solid #d1d4d6",
                            padding: ".50rem .75rem",
                            width: "autopx"
                        }}
                    >
                        {" "}
                        <a style={{ textDecoration: "none", color: "#000000" }}>
                            {" "}
                            test
                        </a>
                    </td>
                    <td
                        style={{
                            textAlign: "center",
                            border: "1px solid #d1d4d6",
                            padding: ".50rem .75rem",
                            width: 60
                        }}
                    >
                        <a
                            href="#"
                            onclick="javascript:window.open('/msg4/Master/AddGroup/@$hVa9KnN5wyCNdi8o95NqvdRP1xMGYXLbDiRbS458s4uXObK65qUjwqhcow5DMBX@','_blank','width=470,height=415,resizable=no,scrollbars=yes,toolbar=no,location=no,directories=no,status=no,menubar=no,copyhistory=no,pointer=yes');"
                            style={{ textDecoration: "none", color: "#000000" }}
                        >
                            <i
                                className="fas fa-edit"
                                title="Edit"
                                style={{ fontSize: 16 }}
                            />
                        </a>
                    </td>
                </tr>
                <tr>
                    <td
                        style={{
                            textAlign: "center",
                            border: "1px solid #d1d4d6",
                            padding: ".50rem .75rem",
                            width: 50
                        }}
                    >
                        <a
                            href="#"
                            onclick="javascript:window.open('/msg4/Master/AddGroup/@JsDa3OMk1M9C1R0Kcf_yxuq7174ec6A7lC_xxShEcu5LQLag_qBlqLfM3I2mpAYy@','_blank','width=470,height=415,resizable=no,scrollbars=yes,toolbar=no,location=no,directories=no,status=no,menubar=no,copyhistory=no,pointer=yes');"
                            style={{ textDecoration: "none", color: "#000000" }}
                        >
                            <i
                                style={{ fontSize: 16, color: "#191970" }}
                                title=""
                                className="fas fa-tags"
                            />
                        </a>
                    </td>
                    <td
                        style={{
                            textAlign: "left",
                            border: "1px solid #d1d4d6",
                            padding: ".50rem .75rem",
                            width: 250
                        }}
                    >
                        {" "}
                        <a style={{ textDecoration: "none", color: "#000000" }}>
                            {" "}
                            Test1
                        </a>
                    </td>
                    <td
                        style={{
                            textAlign: "left",
                            border: "1px solid #d1d4d6",
                            padding: ".50rem .75rem",
                            width: "autopx"
                        }}
                    >
                        {" "}
                        <a style={{ textDecoration: "none", color: "#000000" }}>
                            {" "}
                            testa
                        </a>
                    </td>
                    <td
                        style={{
                            textAlign: "center",
                            border: "1px solid #d1d4d6",
                            padding: ".50rem .75rem",
                            width: 60
                        }}
                    >
                        <a
                            href="#"
                            onclick="javascript:window.open('/msg4/Master/AddGroup/@JsDa3OMk1M9C1R0Kcf_yxuq7174ec6A7lC_xxShEcu5LQLag_qBlqLfM3I2mpAYy@','_blank','width=470,height=415,resizable=no,scrollbars=yes,toolbar=no,location=no,directories=no,status=no,menubar=no,copyhistory=no,pointer=yes');"
                            style={{ textDecoration: "none", color: "#000000" }}
                        >
                            <i
                                className="fas fa-edit"
                                title="Edit"
                                style={{ fontSize: 16 }}
                            />
                        </a>
                    </td>
                </tr>
                <tr>
                    <td
                        style={{
                            textAlign: "center",
                            border: "1px solid #d1d4d6",
                            padding: ".50rem .75rem",
                            width: 50
                        }}
                    >
                        <a
                            href="#"
                            onclick="javascript:window.open('/msg4/Master/AddGroup/@thFcnt17YGOMWGwnqcssBLddtABmnvj_e3OdG1qr683hX5tO$c_1tFVeWW5m7Mfl@','_blank','width=470,height=415,resizable=no,scrollbars=yes,toolbar=no,location=no,directories=no,status=no,menubar=no,copyhistory=no,pointer=yes');"
                            style={{ textDecoration: "none", color: "#000000" }}
                        >
                            <i
                                style={{ fontSize: 16, color: "#191970" }}
                                title=""
                                className="fas fa-tags"
                            />
                        </a>
                    </td>
                    <td
                        style={{
                            textAlign: "left",
                            border: "1px solid #d1d4d6",
                            padding: ".50rem .75rem",
                            width: 250
                        }}
                    >
                        {" "}
                        <a style={{ textDecoration: "none", color: "#000000" }}>
                            {" "}
                            Test1
                        </a>
                    </td>
                    <td
                        style={{
                            textAlign: "left",
                            border: "1px solid #d1d4d6",
                            padding: ".50rem .75rem",
                            width: "autopx"
                        }}
                    >
                        {" "}
                        <a style={{ textDecoration: "none", color: "#000000" }}>
                            {" "}
                            testb
                        </a>
                    </td>
                    <td
                        style={{
                            textAlign: "center",
                            border: "1px solid #d1d4d6",
                            padding: ".50rem .75rem",
                            width: 60
                        }}
                    >
                        <a
                            href="#"
                            onclick="javascript:window.open('/msg4/Master/AddGroup/@thFcnt17YGOMWGwnqcssBLddtABmnvj_e3OdG1qr683hX5tO$c_1tFVeWW5m7Mfl@','_blank','width=470,height=415,resizable=no,scrollbars=yes,toolbar=no,location=no,directories=no,status=no,menubar=no,copyhistory=no,pointer=yes');"
                            style={{ textDecoration: "none", color: "#000000" }}
                        >
                            <i
                                className="fas fa-edit"
                                title="Edit"
                                style={{ fontSize: 16 }}
                            />
                        </a>
                    </td>
                </tr>
                <tr>
                    <td
                        style={{
                            textAlign: "center",
                            border: "1px solid #d1d4d6",
                            padding: ".50rem .75rem",
                            width: 50
                        }}
                    >
                        <a
                            href="#"
                            onclick="javascript:window.open('/msg4/Master/AddGroup/@YNBuIbI63h1hdzNFGPyqWF6PJDmjQBA2KRcOgWELStx6zWJz51p5v6Qp9vWqcjbh@','_blank','width=470,height=415,resizable=no,scrollbars=yes,toolbar=no,location=no,directories=no,status=no,menubar=no,copyhistory=no,pointer=yes');"
                            style={{ textDecoration: "none", color: "#000000" }}
                        >
                            <i
                                style={{ fontSize: 16, color: "#191970" }}
                                title=""
                                className="fas fa-tags"
                            />
                        </a>
                    </td>
                    <td
                        style={{
                            textAlign: "left",
                            border: "1px solid #d1d4d6",
                            padding: ".50rem .75rem",
                            width: 250
                        }}
                    >
                        {" "}
                        <a style={{ textDecoration: "none", color: "#000000" }}>
                            {" "}
                            Test1
                        </a>
                    </td>
                    <td
                        style={{
                            textAlign: "left",
                            border: "1px solid #d1d4d6",
                            padding: ".50rem .75rem",
                            width: "autopx"
                        }}
                    >
                        {" "}
                        <a style={{ textDecoration: "none", color: "#000000" }}>
                            {" "}
                            testc
                        </a>
                    </td>
                    <td
                        style={{
                            textAlign: "center",
                            border: "1px solid #d1d4d6",
                            padding: ".50rem .75rem",
                            width: 60
                        }}
                    >
                        <a
                            href="#"
                            onclick="javascript:window.open('/msg4/Master/AddGroup/@YNBuIbI63h1hdzNFGPyqWF6PJDmjQBA2KRcOgWELStx6zWJz51p5v6Qp9vWqcjbh@','_blank','width=470,height=415,resizable=no,scrollbars=yes,toolbar=no,location=no,directories=no,status=no,menubar=no,copyhistory=no,pointer=yes');"
                            style={{ textDecoration: "none", color: "#000000" }}
                        >
                            <i
                                className="fas fa-edit"
                                title="Edit"
                                style={{ fontSize: 16 }}
                            />
                        </a>
                    </td>
                </tr>
                <tr>
                    <td
                        style={{
                            textAlign: "center",
                            border: "1px solid #d1d4d6",
                            padding: ".50rem .75rem",
                            width: 50
                        }}
                    >
                        <a
                            href="#"
                            onclick="javascript:window.open('/msg4/Master/AddGroup/@iRkuf3$wt18PP00JW6sDj3fPRnCE9MMOXROSCnp4SUPIh0HAEw22VCeqjfcfcCPj@','_blank','width=470,height=415,resizable=no,scrollbars=yes,toolbar=no,location=no,directories=no,status=no,menubar=no,copyhistory=no,pointer=yes');"
                            style={{ textDecoration: "none", color: "#000000" }}
                        >
                            <i
                                style={{ fontSize: 16, color: "#191970" }}
                                title=""
                                className="fas fa-tags"
                            />
                        </a>
                    </td>
                    <td
                        style={{
                            textAlign: "left",
                            border: "1px solid #d1d4d6",
                            padding: ".50rem .75rem",
                            width: 250
                        }}
                    >
                        {" "}
                        <a style={{ textDecoration: "none", color: "#000000" }}>
                            {" "}
                            Test1
                        </a>
                    </td>
                    <td
                        style={{
                            textAlign: "left",
                            border: "1px solid #d1d4d6",
                            padding: ".50rem .75rem",
                            width: "autopx"
                        }}
                    >
                        {" "}
                        <a style={{ textDecoration: "none", color: "#000000" }}>
                            {" "}
                            testd
                        </a>
                    </td>
                    <td
                        style={{
                            textAlign: "center",
                            border: "1px solid #d1d4d6",
                            padding: ".50rem .75rem",
                            width: 60
                        }}
                    >
                        <a
                            href="#"
                            onclick="javascript:window.open('/msg4/Master/AddGroup/@iRkuf3$wt18PP00JW6sDj3fPRnCE9MMOXROSCnp4SUPIh0HAEw22VCeqjfcfcCPj@','_blank','width=470,height=415,resizable=no,scrollbars=yes,toolbar=no,location=no,directories=no,status=no,menubar=no,copyhistory=no,pointer=yes');"
                            style={{ textDecoration: "none", color: "#000000" }}
                        >
                            <i
                                className="fas fa-edit"
                                title="Edit"
                                style={{ fontSize: 16 }}
                            />
                        </a>
                    </td>
                </tr>
            </tbody>
        </TableLayout>
    </>);
}

export default ManageGroup;