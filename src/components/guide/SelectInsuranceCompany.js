import React, { Component } from 'react';



class SelectInsuranceCompany extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // 마우스 효과에 필요한 state 
            //hover: false,

        }
    }

    handleClick = (kindCompanyId) => {

        this.props.selectGuide(kindCompanyId);
    }

    /* 나중에 글자 마우스 enter leave 구현시 필요함*/

    // hoverOn=()=>{
    //     this.setState({ hover: true });
    // }
    // hoverOff=()=>{ 
    //     this.setState({ hover: false });    
    // }
    
    render() {
        let screen = null;
        if (this.props.companyData != null) {
            screen =
            <div className="col-12 form-inline" style={{ width:window.innerWidth,marginBottom: "5px",border:'1px solid black', marginLeft:'140px'}}>
                    {this.props.companyData.map((json) =>
                        <div style={{ width: "33%", textAlign: "center" }}>
                            <span className="mark--required" >*</span> <font style={{ cursor: "pointer" }} onClick={() => this.handleClick(json.id)}>{json.name}</font>
                        </div>)}
                </div>
        }


        return (
            <div className="form-group row sc--table-row">
                <div className="col-9 sc--table-col">
                    <div className="row">
                        {screen}
                    </div>
                </div>
            </div>
        );
    }
}

export default SelectInsuranceCompany;
