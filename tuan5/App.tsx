import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const ProductCard = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('./assets/blue.png')}
                style={styles.productImage}
            />
            <Text style={styles.productName}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
            <View style={styles.ratingContainer}>
                <Text style={styles.ratingText}>★★★★★</Text>
                <Text style={styles.reviewCount}>(Xem 828 đánh giá)</Text>
            </View>
            <View style={styles.priceContainer}>s
                <Text style={styles.currentPrice}>1.790.000 đ</Text>
                <Text style={styles.oldPrice}>1.790.000 đ</Text>
            </View>
            <Text style={styles.priceGuarantee}>Ở đâu rẻ hơn hoàn tiền</Text>

            <TouchableOpacity style={styles.colorSelector}>
                <Text style={styles.colorSelectorText}>4 MÀU - CHỌN MÀU</Text>
                <Text style={styles.arrow}> > </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buyButton}>
                <Text style={styles.buyButtonText}>CHỌN MUA</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    container: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        alignItems: 'center',
        width: '100%',
        height: '100%',
        maxWidth: Dimensions.get('window').width - 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
        marginHorizontal: 10,
    },
    productImage: {
        width: 301,
        height: 361,
        marginBottom: 15,
        resizeMode: 'contain',
    },
    productName: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    ratingText: {
        color: '#FFD700',
        fontSize: 16,
    },
    reviewCount: {
        marginLeft: 5,
        fontSize: 12,
        color: '#555',
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
        justifyContent: 'center',
    },
    currentPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#E53935',
        marginRight: 10,
    },
    oldPrice: {
        fontSize: 16,
        textDecorationLine: 'line-through',
        color: '#888',
    },
    
    // "Ở đâu rẻ hơn hoàn tiền" căn trái
    priceGuarantee: {
        fontSize: 12,
        color: '#E53935',
        marginVertical: 5,
        textAlign: 'left',  // Căn trái
        alignSelf: 'flex-start',  // Đặt nó theo trục ngang của container
        paddingLeft: 10, // Thêm khoảng cách từ mép trái
        fontWeight: 'bold',  // In đậm
        textTransform: 'uppercase',
    },

    // Căn giữa "4 MÀU - CHỌN MÀU" và thêm mũi tên
    colorSelector: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',  // Căn giữa nội dung
        backgroundColor: '#f0f0f0',
        padding: 10,
        borderRadius: 5,
        marginVertical: 10,
        width: '100%',
        borderWidth: 1,
        borderColor: '#ddd',
    },
    colorSelectorText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',  // Căn giữa văn bản
        flex: 1,  // Để văn bản chiếm không gian ở giữa
    },
    arrow: {
        fontSize: 24,
        color: '#000',
        
    },
    buyButton: {
        backgroundColor: '#FF0000',
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 5,
        marginTop: 10,
    },
    buyButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

const App = () => {
    return (
        <View style={styles.outerContainer}>
            <ProductCard />
        </View>
    );
};

export default App;
