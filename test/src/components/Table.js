import React, { Component } from 'react'
import axios from 'axios';
import JwPagination from 'jw-react-pagination';

class Table extends Component {
    mergeData = [];
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            tabledata: [],
            pageOfItems: []
        }
        this.getTableData(this.state.count)
        this.onChangePage = this.onChangePage.bind(this);
    }
    componentWillMount() {
        this.hangleTimeInterval();
    }
    hangleTimeInterval() {
        setInterval(() => {
            this.setState(currentState => ({
                count: currentState.count + 1
            }));
            this.getTableData(this.state.count)
        }, 10000)
    }
  async  getTableData(count) {
        //   console.log(count,"countvalue")
      await axios.get(`https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${count}`).then(res => {
            //  console.log(res,"response")
            let tableList = res.data.hits
            
            this.mergeData.push(...tableList)
            this.setToState(this.mergeData)
        })
    }
    setToState(data) {
        console.log(data,"finalresponse")
        this.setState({
            tabledata: data
        })
    }
    handleRawjson(e,rawdata){
  e.preventDefault();
    this.props.history.push('/rawjson',rawdata)
    }
    onChangePage(pageOfItems) {
        console.log(pageOfItems,"dataresulted")
        // update local state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }
    render() {
        return (
            <div  style={{backgroundColor:'lightblue'}}> 
                     <div style={{marginLeft:'30px'}} className="section">
                          <h2>TableData</h2> 
                     </div>
                <table className="table table-bordered ">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>created_at</th>
                            <th>author</th>
                            <th>URL</th>
                        </tr>
                       </thead>
                       <tbody>
                           {
                               this.state.pageOfItems.map((data)=>{
                       
                                return <tr key={data.id} onClick={(e)=>this.handleRawjson(e,data)}>
                                    <td>{data.title}</td>                                  
                                    <td>{data.created_at}</td>
                                    <td>{data.author}</td>
                                    <td>{data.url}</td>
                                </tr>

                               }
                                
                               
                               )
                            }
                       </tbody>
                </table>
                <JwPagination items={this.state.tabledata} onChangePage={this.onChangePage} />
            </div>
        );
    }

}

export default Table;