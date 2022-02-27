app.component('review-list', {
    props: {
        reviews: {
            type: Array,
            required: true
        }
    },
    template:
        /*html*/
        `
            <div class="review-container">
            <h3>Reviews:</h3>
                <ul>
                    <li v-for="(review, index) in reviews" :key="index">
                        {{ review.name }} gave this {{ review.rating }} stars
                        <br/>
                        "{{ review.review}}" 
                        <br/>
                        {{ review.recommend ? 
                            "and would recommend this product" : 
                            "and would not recommend this product"}}
                    </li>
                </ul>
            </div>
        `,
    computed: {
        recommendation(index) {
            if (this.reviews[index].recommend) {
                return "and would recommend this product";
            } else {
                return "and would not recommend this product";
            }
        }
    }
})