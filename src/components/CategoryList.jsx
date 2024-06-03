import React, { useContext, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import kaffepinSvg from "../../assets/images/icons/kafePin_4.svg"
// import { handlePointerMove } from "../layers/activities/ActivitiesCheckbox";
// import { BaseMap } from "../../views/MapView";
import classNames from "classnames";
import { Overlay } from "ol";
import { ActivitiesCheckbox } from "./layers/activities/ActivitiesCheckbox";
import {GlobalStateContext}  from "../context/GlobalState";


const CategoryButton = ({category, active}) => {
    return (
                    <button 
                    onClick={category?.onClick}
                    // className="btn btn-success m-2 col-4 "
                    className={classNames(
                                {"btn btn-success m-2 col-4 ": !active},
                                {"btn btn-info m-2 col-4 ": active}
        )}
                    >
                        {category?.name}
                    </button>
    ) 
}

const CategoryList = () => {
//   const { map, setFeatureLayers, featureLayers, setActiveFeature, setActivitiesChecked, activitiesChecked  } = useContext(BaseMap);
  const {globalState} = useContext(GlobalStateContext);
  const { map, setFeatureLayers, featureLayers, setActiveFeature, setActivitiesChecked, activitiesChecked, toggleActivity, barsChecked  } = globalState;
    const categories = [
        {name: "Restaurants", 
        active: false,
        onClick:( ) => alert("you clicked on resturants")},
        {name:"Shopping", 
        active: false,
        onClick: ()=>{}},
         ,
        {name:"Cafes", 
        onClick: (e)=>{
        }},
        {name:"Activities", 
        active: activitiesChecked,
        onClick: (e)=>{
        toggleActivity({activity: !activitiesChecked, activityType: "activitiesChecked"})
        }}
        ,
        {name:"Bars", 
        active: barsChecked,
        onClick: ()=>{
        toggleActivity({activity: !barsChecked, activityType: "barsChecked"})
        }},
        {name:"Favorites", 
        active: false,
        onClick: ()=>{}}
    ];


    return (
        <div className ="categoryContainer mt-5">
            <div className="d-flex flex-wrap justify-content-around">
                {categories.map((category, index) => (
                    <CategoryButton key={index} category={category} active={category?.active} />
                    // <button 
                    // onClick={category?.onClick}
                    // key={index} className="btn btn-success m-2 col-4 ">
                    //     {category?.name}
                    // </button>
                ))}
            </div>
        </div>
    );
};

export default CategoryList;
