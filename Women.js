import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Women() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://storeapi.wekreta.in/api/v4/product/customer?id=0&secondaryKey=3d70712a-26fb-11ee-b277-029ff3b26cce&productName=&categoryName=serveware,kitchenware&subCategoryName=&subSubCategoryName=&brandName=&isFeatured=0&search=&currentPage=1&itemsPerPage=27&sortBy=createdDate&sortOrder=desc&isFetchListing=0&searchTag=&storeUuid=cb910d4a-bf60-11ed-814d-0252190a7100')
        .then(response => response.json())
        .then(result=>{
            setData(result.data);
        })
        .catch(error=>console.log(error))
    }, []);

    const renderItem = ({ item }) => (
        <View>
          {/* Render your item components here */}
          <Text style={{color:'black'}} >{item.object.name}</Text>
          {/* Add more components based on your data structure */}
        </View>
      );

    return (
        <View style={{ flex: 1 }} >
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        margin: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'cover',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5,
    },
    price: {
        fontSize: 14,
        color: 'green',
        marginTop: 5,
    },
});
