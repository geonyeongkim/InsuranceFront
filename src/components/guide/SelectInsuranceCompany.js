import React, { Component } from 'react';



class SelectInsuranceCompany extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // 마우스 효과에 필요한 state 
            //hover: false,

        }
    }

    handleClick = (value) => {

        this.props.search(value);
    }

    /* 나중에 글자 마우스 enter leave 구현시 필요함*/

    // hoverOn=()=>{
    //     this.setState({ hover: true });
    // }
    // hoverOff=()=>{ 
    //     this.setState({ hover: false });    
    // }
    
    render() {
        // let screen = null;
        // if (this.props.kindData != null) {
        //     screen =
        //         <div className="col-12 form-inline" style={{ marginBottom: "10px" }}>
        //             {this.props.kindData.map((json) =>
        //                 <div style={{ width: "33%", textAlign: "right" }}>
        //                     <span className="mark--required" >*</span> <font style={{ cursor: "pointer" }} onClick={() => this.handleClick(json.kind_id)}>{json.kind_name}</font>
        //                 </div>)}
        //         </div>
        // }


        return (
            <div className="form-group row sc--table-row">
                adfasdfasdf
            </div>
        );
    }
}

export default SelectInsuranceCompany;
