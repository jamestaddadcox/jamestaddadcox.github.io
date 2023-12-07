<template>
  <div>
    <h1>
        Books
    </h1>
    <p v-for="book in books" :key="book.title">
        <span v-if="book.url !== ''">
            <a :href="book.url" target="_blank"><span class="title">{{book.title}}</span>, {{book.year}}</a>
        </span>
        <span v-else>
            <span class="title">{{book.title}}</span>, {{book.year}}
        </span>
    </p>

    <h1>
        Selected Fiction
    </h1>
    <p v-for="fiction in fictions" :key="fiction.title">
        <span v-if="fiction.url !== ''">
            <a :href="fiction.url" target="_blank">“{{fiction.title}},” <span class="title">{{fiction.publisher}}</span>, {{fiction.year}}</a>
        </span>
        <span v-else>
            “{{fiction.title}},” <span class="title">{{fiction.publisher}}</span>, {{fiction.year}}
        </span>
    </p>
    <h1>
        Reviews
    </h1>
    <p v-for="review in reviews" :key="review.title">
        <span v-if="review.url !== ''">
            <a :href="review.url" target="_blank"><span class ="title">{{review.title}}</span> by {{review.author}}, <span class="title">{{review.publisher}}</span>, {{review.year}}</a>
        </span>
        <span v-else>
            <span class ="title">{{review.title}}</span> by {{review.author}}, <span class="title">{{review.publisher}}</span>, {{review.year}}
        </span>
    </p>

  </div>
</template>

<script>
export default {
    data() {
        return {
            books: [
                {title: 'Denmark: Variations', publisher: 'Hem Press', year: '2023', url: 'https://www.hempressbooks.com/shop/p/denmark-variations'},
                {title: 'Repetition', publisher: 'Cobalt Press', year: '2016', url: 'https://www.cobaltreview.com/product/adcox-repetition/'},
                {title: 'Does Not Love', publisher: 'Curbside Splendor', year: '2014', url: 'https://www.amazon.com/Does-Love-James-Tadd-Adcox/dp/1940430232/'},
                {title: 'Map of the System of Human Knowledge', publisher: 'Tiny Hardcore Press', year: '2012', url: 'https://www.amazon.com/Map-System-Human-Knowledge/dp/0998070165/'},
            ],
            fictions: [
                {title: 'The Stage Name', publisher: 'X-R-A-Y', year: 'forthcoming', url: ''},
                {title: 'A Memory', publisher: 'ergot.', year: '2023', url: 'https://www.ergot.press/authors/James_Tadd_Adcox/A_Memory'},
                {title: 'The Darkness Retreat', publisher: 'Propagule', year: '2023', url: 'https://www.propagule.co/fiction/the-darkness-retreat'},
                {title: 'Three Stories: Doubt, City of the Dead, The Distant Friend', publisher: '3:AM', year: '2023', url: 'https://www.3ammagazine.com/3am/three-stories-5/'},
                {title: '\'This Man Does Not Exist\'', publisher: 'Gigantic Sequins', year: '2023', url: 'https://gigantic-sequins.square.site/product/GSissue14/40'},
                // {title: '', publisher: '', year: '', url: ''},

            ],
            reviews: [
                {title: 'Sister Séance', author: 'Aimee Parkison', publisher: 'American Book Review', year: '2023', url: 'https://muse.jhu.edu/pub/17/article/902833'},
                {title: 'Sprawl', author: 'Danielle Dutton', publisher: 'Triangle House', year: '2020', url: 'https://www.triangle.house/blog/revisit-james-tadd-adcox-on-sprawl'},

            ]
        }
    }

}
</script>

<style>
    h1 {
        font-size: 14pt;
        font-weight: 600;
        padding: 10px 0px 10px 20px;
    }
    a {
        color: inherit;
        text-decoration: inherit;
    }
    p {
        font-size: 11pt;
        padding: 0px 0px 0px 20px;
    }
    .title {
        font-style: italic;
    }

</style>