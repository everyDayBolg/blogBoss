/**
 * Created by lmy on 18-2-4.
 */
import {connect} from 'react-redux';
import EditChange from '../components/myHome';
import { editList } from '../action';

const mapStateToProps = (state) => {
    return {
        mylist: state.editList.aList
    }
};

function mapDispatchToProps(dispatch){
    return{
        allList: () =>{
            dispatch(editList());
        },
        myonDetials:(e)=>{
            e.stopPropagation();
            const ess_id = e.target.parentNode.id;
            localStorage.setItem("ess_id",ess_id);
            dispatch({type:'ESS_DETIALS',id:ess_id})
        }
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(EditChange);
