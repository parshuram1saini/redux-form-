// import initialstate from "../constant/Initialstate";
const initialstate= {
    data:[],
}

const Changetheinput=(state = initialstate ,action)=>{
    switch(action.type){
        case "Submit":
            return {...state ,
                data:[
                    ...state.data,
                    {
                        firstname: action.payload.fname,
                        lastname:action.payload.lname,
                        email: action.payload.email,
                        password: action.payload.password
                    }
                ]
            };
        default:
            return state;
    }
}
export default Changetheinput;