import React from "react";
import {Link} from "react-router-dom";

const NavCategories = () => {
    const categories = [
        {id: 1, name:"Inicio", route: "categories/Inicio"},
        {id: 2, name:"¿Qué ofrecemos?", route: "categories/¿Qué ofrecemos?"},
        {id: 3, name:"Piñatas", route: "categories/Piñatas"},
        {id: 4, name:"Modalidad de trabajo", route: "categories/Modalidad de trabajo"},
    ]

    return (
        <nav>
            {
                (categories.map((category) =>{
                    return(
                        <Link key={category.id} style={styles.categories} to={category.route}>
                            {category.name}
                        </Link>
                    );
                }))
            }
        </nav>
    )
}

const styles = {
    categories: { 
        paddingLeft: 100,
        marginRight: 30,
        fontSize: 30,
        color: "black",
        textDecoration: "none",
    }
}


export default NavCategories;