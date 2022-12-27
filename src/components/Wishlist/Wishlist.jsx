import React from "react";
import Button from 'react-bootstrap/Button';
import { actionCreators } from "../../reduxStore/actions";
import { useDispatch, useSelector } from "react-redux";
import ListItem from "../SearchBox/ListItem";
import { img_url } from "../../api";

export default function Wishlist() {
    const items = useSelector(state => state.reducer.items);
    const dispatch = useDispatch();
    const handleClear = () => {
        dispatch(actionCreators.clearItems());
    };

    return (
        <>
            {!items || items.length == 0 ? (
                <>
                    <div className="row">
                        <div className="col text-info text-center">
                            <h6>Wishlist is empty, feel free to add one!</h6>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <Button variant="outline-danger" onClick={handleClear}>Cear</Button>
                </>
            )}
            {
                items?.map((result, index) => (
                    <div key={index} className="mt-1">
                        <ListItem
                            title={result.title}
                            imageUrl={`${img_url}${result.poster_path}`}
                            caption={result.release_date}
                            id={result.id}
                        />

                    </div>
                ))
            }
        </>

    );

}
