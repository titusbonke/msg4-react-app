function FilterBar({children}) {
    return (<>
        <style
            dangerouslySetInnerHTML={{
                __html:
                    "\n.card-filter {background-color: transparent;border-bottom: 1px solid rgba(0,0,0,.125);padding: .75rem 1.25rem;position: relative;border-top-left-radius: .25rem;border-top-right-radius: .25rem;margin-bottom: 0;\n  }#FilterBox20 label{ margin-bottom:0.3rem;} .Rfilter{display: inline-block;width:auto;margin-right:1rem; } .select2-selection__rendered { padding-bottom:0px!important;} "
            }}
        />
        <section className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div
                                id="FilterBox20"
                                className="card-filter border-transparent"
                                style={{ paddingBottom: 0, paddingLeft: 10, paddingRight: 10 }}
                            >
                                <div className="row">
                                    <div className="col-sm-12 col-md-12">
                                        <div style={{ display: "inline-block", width: "100%" }}>
                                            {children}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>);
}

export default FilterBar;