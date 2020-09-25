import React from 'react'
import './SearchBox.css';
import useControlledInput from '../../customHooks/useControlledInput';

export default function SearchBox(props) {

    const where = useControlledInput('');
    const checkIn = useControlledInput('');
    const checkOut = useControlledInput('');
    const guests = useControlledInput(1)

    // const [where, changeWhere] = useState("");
    // const [checkIn, changeCheckIn] = useState("");
    // const [checkOut, changeCheckOut] = useState("");
    // const [guests, changeGuests] = useState(1);

    const submitSearch = (e) =>{
                e.preventDefault();
                props.history.push(`/search/${where.value}`)
            }

    return (
        <div className="home-search-box col m4">
                 <h1>Book unique places to stay and things to do.</h1>
                 <form onSubmit={submitSearch} className="search-box-form">
                     <div className="col m12">
                         <div className="form-label">Where</div>
                         <div clas="input-field" id="where">
                             <input className="browser-default"  placeholder="Anywhere"  {...where} type="text"/>
                         </div>
                     </div>

                     <div className="col m6">
                         <div className="form-label">check-in</div>
                         <div clas="input-field" id="where">
                             <input className="browser-default"  placeholder="Anywhere" {...checkIn} type="date"/>
                         </div>
                     </div>

                     <div className="col m6">
                         <div className="form-label">check-out</div>
                         <div clas="input-field" id="where">
                             <input className="browser-default" {...checkOut} placeholder="Anywhere" type="date"/>
                        </div>
                     </div>

                     <div className="col m12">
                         <div className="form-label">Guests</div>
                         <div clas="input-field" id="where">
                             <input className="browser-default" {...guests} placeholder="Guests"  type="number"/>
                         </div>
                     </div>

                     <div className="col m12 submit-btn">
                         <div clas="input-field" id="submit-btn">
                             <input className="btn-large waves-effect waves-light red accent-2" type="submit" />
                         </div>
                     </div>
                   
                 </form>
             </div>
    )
}



// import React, {Component} from 'react';
// import './SearchBox.css';

// class SearchBox extends Component{
//     state={
//         where: "",
//         checkIn: "",
//         checkOut: "",
//         guests: 1
//     }
//     changeWhere = (e) => {
//         this.setState({
//             where: e.target.value
//         })
//     }
//     changeCheckIn = (e) => {
//         this.setState({
//             checkIn: e.target.value
//         })
//     }
//     changeCheckOut = (e) => {
//         this.setState({
//             checkOut: e.target.value
//         })
//     }
//     changeGuests = (e) => {
//         this.setState({
//             guests: e.target.value
//         })
//     }

//     submitSearch = (e) =>{
//         e.preventDefault();
//         this.props.history.push(`/search/${this.state.where}`)
//     }

//     render(){
//         return(
//             <div className="home-search-box col m4">
//                 <h1>Book unique places to stay and things to do.</h1>
//                 <form onSubmit={this.submitSearch} className="search-box-form">
//                     <div className="col m12">
//                         <div className="form-label">Where</div>
//                         <div clas="input-field" id="where">
//                             <input className="browser-default" onChange={this.changeWhere} placeholder="Anywhere" value={this.state.where} type="text"/>
//                         </div>
//                     </div>

//                     <div className="col m6">
//                         <div className="form-label">check-in</div>
//                         <div clas="input-field" id="where">
//                             <input className="browser-default" onChange={this.changeCheckIn} placeholder="Anywhere" value={this.state.checkIn} type="date"/>
//                         </div>
//                     </div>

//                     <div className="col m6">
//                         <div className="form-label">check-out</div>
//                         <div clas="input-field" id="where">
//                             <input className="browser-default" onChange={this.changeCheckOut} placeholder="Anywhere" value={this.state.checkOut} type="date"/>
//                         </div>
//                     </div>

//                     <div className="col m12">
//                         <div className="form-label">Guests</div>
//                         <div clas="input-field" id="where">
//                             <input className="browser-default" onChange={this.changeGuests} placeholder="Guests" value={this.state.guests} type="number"/>
//                         </div>
//                     </div>

//                     <div className="col m12 submit-btn">
//                         <div clas="input-field" id="submit-btn">
//                             <input className="btn-large waves-effect waves-light red accent-2" type="submit" />
//                         </div>
//                     </div>
                    
//                 </form>
//             </div>
//         )
//     }
// }

// export default SearchBox;