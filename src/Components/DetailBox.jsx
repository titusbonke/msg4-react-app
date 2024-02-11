function DetailBox({ Name, Detail, ColorClass, IconClass }) {
    // console.log(Name, Detail, ColorClass, IconClass);
    return (
        <>
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        "\n    .col-lg-3 .small-box h3, .col-md-3 .small-box h3 {\n        font-size: 1.6rem;\n        white-space: pre-wrap;\n    }\n"
                }}
            />
            <div className="col-md-3 col-sm-6 col-12">
                <div className={"small-box " + ColorClass}>
                    <div className="inner">
                        <h3>{Detail}</h3>
                        <p>{Name}</p>
                    </div>
                    <div className="icon">
                        <i
                            className={IconClass}
                            title=""
                            style={{ fontSize: 24 }}
                        />
                    </div>
                </div>
            </div>
        </>

    );
}

export default DetailBox;