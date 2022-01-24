import React, { useEffect } from "react";
//import { useSelector, useDispatch } from 'react-redux'
import { connect } from "react-redux";
import { fetchUsers } from "../../redux/Users/UserActions";
import { useSelector } from "react-redux";
import { fetchDeals } from "../../redux/Deals/DealActions";

function UsersContainer({ userdata, fetchDeals }) {
    const userId = useSelector((state) => state.authRedux).user.id;
    useEffect(() => {
        fetchDeals(userId);
    }, []);
    // console.log(userdata);
    // return <div>ok</div>;
    return userdata.loading ? (
        <h2>Loading</h2>
    ) : userdata.error ? (
        <h2>{userdata.error}</h2>
    ) : (
        <div>
            <h2>Users List</h2>
            <div>
                {userdata.deals.map((user, index) => (
                    <p key={index}>
                        {user.id} {user.priority}
                    </p>
                ))}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        userdata: state.dealsRedux,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchDeals: (userId) => dispatch(fetchDeals(userId)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
