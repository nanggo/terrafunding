import React, { Component } from "react";
import { Data, data } from "../components/data/data";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [
        {
          headerName: "ID",
          field: "id",
        },
        {
          headerName: "Title",
          field: "title",
        },
        {
          headerName: "Typed Status",
          field: "typedStatus",
          filter: true,
        },
        {
          headerName: "Rate Of Return",
          field: "rateOfReturn",
        },
        {
          headerName: "Loan Period",
          field: "loanPeriod",
        },
        {
          headerName: "Target Amount",
          field: "targetAmount",
        },
        {
          headerName: "Contract Type",
          field: "contractType",
          filter: true,
        },
        {
          headerName: "Grade",
          field: "grade",
        },
        {
          headerName: "Invest Amount",
          field: "investAmount",
        },
        {
          headerName: "URL",
          field: "url",
        },
        {
          headerName: "SoldOut Soon",
          field: "soldOutSoon",
        },
        {
          headerName: "Current Rate",
          field: "currentRate",
        },
      ],
      rowData: data.list
      .sort((a, b) => {
        if (a.currentRate > b.currentRate) {
          return 1;
        } else if (a.currentRate < b.currentRate) {
          return -1;
        } else {
          return a.id - b.id;
        }
      }),
      defaultColDef:{
        resizable: true
      },
      gridOptions:{
        // rowModelType:"infinite",
        // datasource: this.rowData
      },
      onFirstDataRendered: function(params){
        params.api.sizeColumnsToFit();
      }
    };
  }
  render() {
    return (
      <div
        className="ag-theme-balham"
        style={{
          height: "300px",
          width: "800px",
        }}
      >
        <AgGridReact
          columnDefs={this.state.columnDefs}
          defaultColDef={this.state.defaultColDef}
          gridOptions={this.state.gridOptions}
          rowData={this.state.rowData}
          onFirstDataRendered={this.state.onFirstDataRendered}
        ></AgGridReact>
      </div>
    );
  }
}

export default Products;
