import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Carousel from "../../../src/components/carousel";

const { width: SCREEN_WIDTH } = Dimensions.get("screen");

const Index = () => {
    // Sample data for different carousel variants
    const imageData = [
        { id: 1, image: "https://picsum.photos/300/200?random=1" },
        { id: 2, image: "https://picsum.photos/300/200?random=2" },
        { id: 3, image: "https://picsum.photos/300/200?random=3" },
        { id: 4, image: "https://picsum.photos/300/200?random=4" },
    ];

    const cardData = [
        { id: 1, title: "Card 1", subtitle: "Description 1", color: "#FA6B6B" },
        { id: 2, title: "Card 2", subtitle: "Description 2", color: "#4ECDC4" },
        { id: 3, title: "Card 3", subtitle: "Description 3", color: "#45B7D1" },
        { id: 4, title: "Card 4", subtitle: "Description 4", color: "#96CEB4" },
    ];

    const textData = [
        { id: 1, text: "Welcome to our app!", value: 1 },
        { id: 2, text: "Discover amazing features", value: 2 },
        { id: 3, text: "Get started today", value: 3 },
    ];

    // Additional data for new variants
    const productData = [
        { id: 1, name: "Premium Headphones", price: "$299", rating: 4.8, image: "https://picsum.photos/150/150?random=10" },
        { id: 2, name: "Wireless Speaker", price: "$199", rating: 4.6, image: "https://picsum.photos/150/150?random=11" },
        { id: 3, name: "Smart Watch", price: "$399", rating: 4.9, image: "https://picsum.photos/150/150?random=12" },
        { id: 4, name: "Laptop Stand", price: "$89", rating: 4.7, image: "https://picsum.photos/150/150?random=13" },
    ];

    const testimonialData = [
        { id: 1, name: "Sarah Johnson", role: "Designer", text: "Amazing product! Exceeded all my expectations.", avatar: "https://picsum.photos/60/60?random=20" },
        { id: 2, name: "Mike Chen", role: "Developer", text: "Best investment I've made this year. Highly recommended!", avatar: "https://picsum.photos/60/60?random=21" },
        { id: 3, name: "Emma Davis", role: "Manager", text: "Incredible quality and outstanding customer service.", avatar: "https://picsum.photos/60/60?random=22" },
    ];

    const featureData = [
        { id: 1, icon: "🚀", title: "Fast Performance", description: "Lightning fast loading times" },
        { id: 2, icon: "🔒", title: "Secure", description: "Bank-level security protection" },
        { id: 3, icon: "📱", title: "Mobile First", description: "Optimized for all devices" },
        { id: 4, icon: "🎨", title: "Beautiful UI", description: "Modern and intuitive design" },
    ];

    const gradientData = [
        { id: 1, gradient: ["#667eea", "#764ba2"], title: "Gradient 1" },
        { id: 2, gradient: ["#f093fb", "#f5576c"], title: "Gradient 2" },
        { id: 3, gradient: ["#4facfe", "#00f2fe"], title: "Gradient 3" },
        { id: 4, gradient: ["#43e97b", "#38f9d7"], title: "Gradient 4" },
    ];

    // Render functions for different carousel types
    const renderImageItem = ({ item }: { item: any }) => (
        <View style={styles.imageContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
        </View>
    );

    const renderCardItem = ({ item }: { item: any }) => (
        <View style={[styles.cardContainer, { backgroundColor: item.color }]}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
        </View>
    );

    const renderTextItem = ({ item }: { item: any }) => (
        <View style={styles.textContainer}>
            <Text style={styles.textItem}>{item.text}</Text>
        </View>
    );

    const renderProductItem = ({ item }: { item: any }) => (
        <View style={styles.productContainer}>
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <View style={styles.productInfo}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productPrice}>{item.price}</Text>
                <View style={styles.ratingContainer}>
                    <Text style={styles.rating}>⭐ {item.rating}</Text>
                </View>
            </View>
        </View>
    );

    const renderTestimonialItem = ({ item }: { item: any }) => (
        <View style={styles.testimonialContainer}>
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
            <Text style={styles.testimonialText}>"{item.text}"</Text>
            <Text style={styles.testimonialName}>{item.name}</Text>
            <Text style={styles.testimonialRole}>{item.role}</Text>
        </View>
    );

    const renderFeatureItem = ({ item }: { item: any }) => (
        <View style={styles.featureContainer}>
            <Text style={styles.featureIcon}>{item.icon}</Text>
            <Text style={styles.featureTitle}>{item.title}</Text>
            <Text style={styles.featureDescription}>{item.description}</Text>
        </View>
    );

    const renderGradientItem = ({ item }: { item: any }) => (
        <View style={[styles.gradientContainer, {
            backgroundColor: item.gradient[0],
            // Note: For actual gradient implementation, you'd use LinearGradient from expo-linear-gradient
        }]}>
            <Text style={styles.gradientTitle}>{item.title}</Text>
        </View>
    );

    return (
        <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 100 }}>
            <Text style={styles.sectionTitle}>Carousel Variants</Text>

            {/* Variant 1: Image Carousel with Fluid Pagination */}
            <Text style={styles.variantTitle}>1. Image Carousel (Fluid Pagination)</Text>
            <Carousel
                data={imageData}
                renderItem={renderImageItem}
                fluid={true}
            />

            {/* Variant 2: Card Carousel with Custom Dot Color */}
            <Text style={styles.variantTitle}>2. Card Carousel (Custom Dots)</Text>
            <Carousel
                data={cardData}
                renderItem={renderCardItem}
                fluid={false}
                DotColor="cyan"
            />

            {/* Variant 3: Text Carousel with Default Styling */}
            <Text style={styles.variantTitle}>3. Text Carousel (Default Styling)</Text>
            <Carousel
                data={textData}
                renderItem={renderTextItem}
                fluid={true}
            />

            {/* Variant 4: Compact Image Carousel */}
            <Text style={styles.variantTitle}>4. Compact Image Carousel</Text>
            <Carousel
                data={imageData.slice(0, 3)}
                renderItem={renderImageItem}
                fluid={false}
            />

            {/* Variant 5: Product Showcase Carousel */}
            <Text style={styles.variantTitle}>5. Product Showcase</Text>
            <Carousel
                data={productData}
                renderItem={renderProductItem}
                fluid={true}
                style={[styles.productCarousel]}
            />

            {/* Variant 6: Testimonials Carousel */}
            <Text style={styles.variantTitle}>6. Customer Testimonials</Text>
            <Carousel
                data={testimonialData}
                renderItem={renderTestimonialItem}
                fluid={false}
                style={[styles.testimonialCarousel]}
            />

            {/* Variant 7: Feature Highlights */}
            <Text style={styles.variantTitle}>7. Feature Highlights</Text>
            <Carousel
                data={featureData}
                renderItem={renderFeatureItem}
                fluid={true}
                style={[styles.featureCarousel]}
            />

            {/* Variant 8: Gradient Cards */}
            <Text style={styles.variantTitle}>8. Gradient Cards</Text>
            <Carousel
                data={gradientData}
                renderItem={renderGradientItem}
                fluid={false}
                style={[styles.gradientCarousel]}
            />

            {/* Variant 9: Single Item Showcase */}
            <Text style={styles.variantTitle}>9. Single Item Showcase</Text>
            <Carousel
                data={[imageData[0]]}
                renderItem={renderImageItem}
                fluid={true}
                style={[styles.singleItemCarousel]}
            />

            {/* Variant 10: Mixed Content Carousel */}
            <Text style={styles.variantTitle}>10. Mixed Content</Text>
            <Carousel
                data={[...imageData.slice(0, 2), ...cardData.slice(0, 2)]}
                renderItem={({ item }) =>
                    item.image ? renderImageItem({ item }) : renderCardItem({ item })
                }
                fluid={true}
            />

            {/* NEW VARIANTS - Paginator Control Props */}

            {/* Variant 11: Hidden Paginator */}
            <Text style={styles.variantTitle}>11. Hidden Paginator</Text>
            <Carousel
                data={imageData}
                renderItem={renderImageItem}
                fluid={true}
                showPaginator={false}
            />

            {/* Variant 12: Non-Overlapping Paginator */}
            <Text style={styles.variantTitle}>12. Non-Overlapping Paginator</Text>
            <Carousel
                data={cardData}
                renderItem={renderCardItem}
                fluid={false}
                overlapPaginator={false}
                paginatorGap={30}
            />

            {/* Variant 13: Large Gap Paginator */}
            <Text style={styles.variantTitle}>13. Large Gap Paginator</Text>
            <Carousel
                data={textData}
                renderItem={renderTextItem}
                fluid={true}
                overlapPaginator={false}
                paginatorGap={80}
            />

            {/* Variant 14: Overlapping with Custom Gap */}
            <Text style={styles.variantTitle}>14. Overlapping with Custom Gap</Text>
            <Carousel
                data={productData.slice(0, 3)}
                renderItem={renderProductItem}
                fluid={true}
                overlapPaginator={true}
                paginatorGap={20}
                style={[styles.productCarousel]}
            />

            {/* SECTION 7: LOOP VARIANTS */}
            <Text style={styles.categoryTitle}>🔄 Loop Variants</Text>

            <Text style={styles.variantTitle}>23. Infinite Loop Carousel</Text>
            <Carousel
                data={imageData}
                renderItem={renderImageItem}
                showPaginator={true}
                loop={true}
                style={styles.carousel}
            />

            <Text style={styles.variantTitle}>24. Loop with Custom Dots</Text>
            <Carousel
                data={cardData}
                renderItem={renderCardItem}
                showPaginator={true}
                loop={true}
                DotColor="#00CED1"
                style={styles.carousel}
            />

            <Text style={styles.variantTitle}>25. Loop without Paginator</Text>
            <Carousel
                data={textData}
                renderItem={renderTextItem}
                showPaginator={false}
                loop={true}
                style={styles.carousel}
            />

            <Text style={styles.variantTitle}>26. Product Loop Showcase</Text>
            <Carousel
                data={productData}
                renderItem={renderProductItem}
                showPaginator={true}
                loop={true}
                DotColor="#FFD700"
                style={styles.productCarousel}
            />

            <Text style={styles.variantTitle}>27. Loop with Non-Overlapping Paginator</Text>
            <Carousel
                data={featureData}
                renderItem={renderFeatureItem}
                showPaginator={true}
                loop={true}
                overlapPaginator={false}
                paginatorGap={40}
                DotColor="#2ECC71"
                style={styles.featureCarousel}
            />

            <Text style={styles.variantTitle}>28. Single Item Loop (No Effect)</Text>
            <Carousel
                data={[imageData[0]]}
                renderItem={renderImageItem}
                showPaginator={true}
                loop={true}
                style={styles.singleItemCarousel}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        padding: 16,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
        color: "#333",
    },
    variantTitle: {
        fontSize: 16,
        fontWeight: "600",
        marginTop: 20,
        marginBottom: 10,
        color: "#555",
    },
    categoryTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 30,
        marginBottom: 15,
        color: "#333",
        borderBottomWidth: 2,
        borderBottomColor: "#ddd",
        paddingBottom: 8,
    },
    carousel: {
        height: 200,
        marginBottom: 20,
    },
    compactCarousel: {
        height: 150,
    },
    productCarousel: {
        height: 180,
    },
    testimonialCarousel: {
        height: 220,
    },
    featureCarousel: {
        height: 160,
    },
    gradientCarousel: {
        height: 120,
    },
    singleItemCarousel: {
        height: 250,
    },
    imageContainer: {
        width: SCREEN_WIDTH - 32,
        height: 200,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 12,
    },
    cardContainer: {
        width: SCREEN_WIDTH - 32,
        height: 200,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 12,
        padding: 20,
    },
    cardTitle: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
        marginBottom: 8,
    },
    cardSubtitle: {
        fontSize: 16,
        color: "white",
        opacity: 0.9,
    },
    textContainer: {
        width: SCREEN_WIDTH - 32,
        height: 200,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 12,
        padding: 20,
    },
    textItem: {
        fontSize: 20,
        fontWeight: "600",
        color: "#333",
        textAlign: "center",
    },
    productContainer: {
        width: SCREEN_WIDTH - 32,
        height: 180,
        backgroundColor: "white",
        borderRadius: 12,
        padding: 16,
        flexDirection: "row",
        alignItems: "center",
    },
    productImage: {
        width: 80,
        height: 80,
        borderRadius: 8,
        marginRight: 16,
    },
    productInfo: {
        flex: 1,
    },
    productName: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 4,
    },
    productPrice: {
        fontSize: 20,
        fontWeight: "600",
        color: "#2ECC71",
        marginBottom: 8,
    },
    ratingContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    rating: {
        fontSize: 14,
        color: "#F39C12",
    },
    testimonialContainer: {
        width: SCREEN_WIDTH - 32,
        height: 220,
        backgroundColor: "white",
        borderRadius: 12,
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginBottom: 16,
    },
    testimonialText: {
        fontSize: 16,
        color: "#333",
        textAlign: "center",
        fontStyle: "italic",
        marginBottom: 12,
        lineHeight: 24,
    },
    testimonialName: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 4,
    },
    testimonialRole: {
        fontSize: 14,
        color: "#666",
    },
    featureContainer: {
        width: SCREEN_WIDTH - 32,
        height: 160,
        backgroundColor: "white",
        borderRadius: 12,
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    featureIcon: {
        fontSize: 48,
        marginBottom: 12,
    },
    featureTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 8,
        textAlign: "center",
    },
    featureDescription: {
        fontSize: 14,
        color: "#666",
        textAlign: "center",
    },
    gradientContainer: {
        width: SCREEN_WIDTH - 32,
        height: 120,
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
    },
    gradientTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
    },
});

export default Index;
