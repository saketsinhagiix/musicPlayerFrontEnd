import React from 'react';
import SongList from '@components/SongList';
import SongDetail from '@components/SongDetail';
import SearchBar from '@components/SearchBar';

const App = () => {

    const onTermSubmit = (input) => {
        //     const newSongList = [];
        //     if (event.target.value !== null || event.target.value !== '') {
        //         productList.forEach((product) => {
        //             const searchFields = `${product?.insurerTransactionName || ''}${product?.transactionTypeName || ''
        //                 }${product?.productName || ''} ${product?.stepName || ''} ${product?.firstName || ''
        //                 } ${product?.lastName || ''} `.toLowerCase();
        //             if (searchFields.includes(event.target.value.toLowerCase())) {
        //                 newProductArray.push(product);
        //             }
        //         });
        //         setSearchedProductList(newProductArray);
        //     } else {
        //         setSearchedProductList(null);
        //     }
    };

    return (
        <div className="ui container">
            <SearchBar onTermSubmit={onTermSubmit} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <SongDetail />
                    </div>
                    <div className="five wide column">
                        <SongList />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;