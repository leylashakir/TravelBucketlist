import React from "react";
import data from "../src/data";
import TravelCard from "./TravelCard";
import TopNav from "./TopNav";

export default function BucketList() {
    const destination = data.map(item => {
        return (
            <TravelCard
                key={item.id}
                location={item.location}
                imageUrl={item.imageUrl}
                googleMapsUrl={item.googleMapsUrl}
                description={item.description}
                title={item.title}
            />
        )
    })

    return (
        <div>
            <TopNav />
            <section className="travelList">
                {destination}
            </section>
        </div>
    )
}