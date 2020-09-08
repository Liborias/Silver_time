import React from "react";
import "./carFeatures.css";
import { car } from "./dataCarFeatures";

const CarFeatures = () => {
    console.log(Object.keys(car.features));
    return (
        <>
            <h2>
                {car.make} {car.model}
            </h2>
            <ul>
                {
                    Object.keys(car.features).map((featureKey) => {
                        const feature = car.features[featureKey];
                        return (
                            <li className={`tag ${feature.isHighlight ? "highlighted" : ""} ${feature.isPremium ? "premium" : ""}`}>
                                {feature.isPremium ? "֍ " : ""}
                                {feature.translation}
                            </li>
                        );
                    })
                }
            </ul>
        </>
    );
};

export default CarFeatures;
