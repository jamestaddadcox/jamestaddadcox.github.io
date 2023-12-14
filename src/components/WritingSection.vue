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
        Reviews, Interviews
    </h1>
    <p v-for="review in reviews" :key="review.title">
        <span v-if="review.url !== '' && review.author !== ''">
            <a :href="review.url" target="_blank"><span class ="title">{{review.title}}</span> by {{review.author}}, <span class="title">{{review.publisher}}</span>, {{review.year}}</a>
        </span>
        <span v-if="review.url !== '' && review.author === ''">
            <a :href="review.url" target="_blank">“{{review.title}},” <span class="title">{{review.publisher}}</span>, {{review.year}}</a>
        </span>
        <span v-if="review.url === '' && review.author === ''">
            “{{review.title}},” <span class="title">{{review.publisher}}</span>, {{review.year}}
        </span>
        <span v-if="review.url === '' && review.author !== ''">
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
                {title: 'Five Essays', publisher: 'Ghost City Press', year: '2021, chapbook', url: 'https://ghostcitypress.com/2021-summer-series/five-essays'},
                {title: 'Kircher Plates: or, Notes on the Beginning of a Science', publisher: 'Ghost City Press', year: '2020, chapbook', url: 'https://ghostcitypress.com/2020-summer-series/kircher-plates-or-notes-on-the-beginning-of-a-science'},
                {title: 'Repetition', publisher: 'Cobalt Press', year: '2016', url: 'https://www.cobaltreview.com/product/adcox-repetition/'},
                {title: 'Does Not Love', publisher: 'Curbside Splendor', year: '2014', url: 'https://www.amazon.com/Does-Love-James-Tadd-Adcox/dp/1940430232/'},
                {title: 'Map of the System of Human Knowledge', publisher: 'Tiny Hardcore Press', year: '2012', url: 'https://www.amazon.com/Map-System-Human-Knowledge/dp/0998070165/'},
            
                // {title: '', publisher: '', year: '', url: ''},            
            ],
            fictions: [
                {title: 'The Stage Name', publisher: 'X-R-A-Y', year: 'forthcoming', url: ''},
                {title: 'Separation', publisher: 'The End', year: '2023', url: 'https://theendmagazine.net/'},
                {title: 'A Memory', publisher: 'ergot.', year: '2023', url: 'https://www.ergot.press/authors/James_Tadd_Adcox/A_Memory'},
                {title: 'The Darkness Retreat', publisher: 'Propagule', year: '2023', url: 'https://www.propagule.co/fiction/the-darkness-retreat'},
                {title: 'Three Stories: Doubt, City of the Dead, The Distant Friend', publisher: '3:AM', year: '2023', url: 'https://www.3ammagazine.com/3am/three-stories-5/'},
                {title: '\'This Man Does Not Exist\'', publisher: 'Gigantic Sequins', year: '2023', url: 'https://gigantic-sequins.square.site/product/GSissue14/40'},
                {title: 'The No-Show', publisher: 'Oyez Review', year: '2023', url: 'https://medium.com/oyez-review/the-no-show-by-james-tadd-adcox-56fbc5e12575'},
                {title: 'A Pause for Acknowledgments', publisher: 'The Rupture', year: '2022', url: 'https://www.therupturemag.com/rupture/a-pause-for-acknowledgments'},
                {title: 'A v ~A', publisher: 'X-R-A-Y', year: '2022', url: 'https://xraylitmag.com/a-v-a-by-james-tadd-adcox/fiction/'},
                {title: 'The Hotel', publisher: 'The Rupture', year: '2021', url: 'https://www.therupturemag.com/rupture/the-hotel'},
                {title: 'DENMARK: Old / Russian/ Det. Text / Det. Sound / Ghost Mother', publisher: 'Heavy Feather Review', year: '2021', url: 'https://heavyfeatherreview.org/portfolio/current-issue/'},
                {title: 'Squab', publisher: 'Inscape', year: '2021', url: 'https://tower.washburn.edu/inscape/articles/2021/james-tadd-adcox.html'},
                {title: 'DENMARK: Ophelia Suite', publisher: 'Split Lip', year: '2021, nominated for Best Microfiction 2022', url: 'https://splitlipthemag.com/lip-service/best-microfiction-nominees-2022'},
                {title: 'DENMARK: Abandoned / Doppelgänger / Madness II', publisher: 'Afternoon Visitor', year: '2020', url: 'https://www.afternoonvisitor.com/james-tadd'},
                {title: 'DENMARK: Fortinbras / Madness / Gonzago', publisher: 'Babel Tower Notice Board', year: '2020', url: ''},
                {title: 'DENMARK: Awareness / Many / Whose / Boundary', publisher: 'Ligeia', year: '2020', url: 'https://www.ligeiamagazine.com/fall-2020/denmark-variations-james-tadd-adcox/'},
                {title: 'An Essay on Mustaches', publisher: 'Passages North', year: '2020', url: 'https://www.passagesnorth.com/issue-41'},                
                {title: 'Three Kircher Plates', publisher: 'Dream Pop', year: '2019', url: 'https://www.dreampoppress.net/james-tadd-adcox/'},
                {title: 'The Answer, The President', publisher: 'Wigleaf', year: '2019', url: 'https://wigleaf.com/201910answer.htm'},
                {title: 'An Essay on Bigness', publisher: 'X-R-A-Y', year: '2018', url: 'https://xraylitmag.com/an-essay-on-bigness-by-james-tadd-adcox/fiction/'},
                {title: 'Exhibits for the Defense', publisher: 'The Collagist', year: '2018', url: 'http://thecollagist.com/the-collagist/2018/9/28/exhibits-for-the-defense.html'},
                {title: 'Idiot', publisher: 'Cover Lit', year: '2018', url: 'https://www.coverlitmag.com/idiot-james-tadd-adcox'},
                {title: 'She Hated the Child', publisher: 'The Rumpus', year: '2018', url: 'https://therumpus.net/2018/05/23/rumpus-original-fiction-she-hated-the-child/'},
                {title: 'The Liar', publisher: 'Granta', year: '2016', url: 'https://granta.com/the-liar/'},
                {title: 'My Father Is Dying, a Memoir', publisher: 'The Collagist', year: '2016', url: 'http://thecollagist.com/the-collagist/2016/10/4/my-father-is-dying-a-memoir.html'},
                {title: 'DENMARK: Variations 1, 2, 5', publisher: 'CutBank', year: '2014', url: 'https://scholarworks.umt.edu/cgi/viewcontent.cgi?article=3856&context=cutbank'},
                {title: 'Millard Fillmore', publisher: 'Their Peculiar Ambitions: 44 Stories about Our 44 Presidents', year: '2012, Melville House', url: ''},
                {title: 'Five Autobiographies', publisher: 'Another Chicago Magazine', year: '2012', url: ''},
                {title: 'The Bed Frame, A Dial Tone, The Off Season, The Weight of the Internet', publisher: 'TriQuarterly', year: '2011', url: 'https://www.triquarterly.org/issues/issue-139'},
                {title: 'Divination', publisher: 'Mid-American Review', year: '2011', url: 'https://casit.bgsu.edu/midamericanreview/volume-xxxi-no-2/'},
                {title: 'The Final Room', publisher: 'Necessary Fiction', year: '2010 (with Robert Kloss)', url: 'http://necessaryfiction.com/writerinres/TheFinalRoombyJamesTaddAdcox/'},
                {title: 'The Gift Shop', publisher: '>kill author', year: '2010', url: ''},
                {title: 'No One In the Office Know What the Work Is', publisher: 'Barrelhouse Magazine', year: '2010', url: ''},
                {title: 'The Judgment, Home Intruders', publisher: 'The Literary Review', year: '2010', url: ''},
                {title: 'The Artificial Mountain', publisher: 'n+1', year: '2009', url: 'https://www.nplusonemag.com/online-only/online-only/short-shorts/'},
                {title: 'I Keep Finding Things I Thought I\'d Lost Long Ago', publisher: 'PANK', year: '2009', url: 'https://pankmagazine.com/piece/james-tadd-adcox/'},
                {title: 'Four Disconnected Truths about My Father', publisher: 'SmokeLong Quarterly', year: '2009', url: 'https://www.smokelong.com/stories/four-disconnected-truths-about-my-father/'},
                
                // {title: '', publisher: '', year: '', url: ''},

            ],
            reviews: [
                {title: 'Sister Séance', author: 'Aimee Parkison', publisher: 'American Book Review', year: '2023', url: 'https://muse.jhu.edu/pub/17/article/902833'},
                {title: 'Sprawl', author: 'Danielle Dutton', publisher: 'Triangle House', year: '2020', url: 'https://www.triangle.house/blog/revisit-james-tadd-adcox-on-sprawl'},
                {title: 'Woods and Clouds Interchangeable', author: 'Michael Earl Craig', publisher: 'American Book Review', year: '2019', url: 'https://muse.jhu.edu/article/727090/summary'},
                {title: 'Modern Love', author: 'Constance De Jong', publisher: 'American Book Review', year: '2018', url: 'https://muse.jhu.edu/article/698980/summary'},
                {title: 'Fat Beautiful Stinking Bookmarks: Joseph Scapellato with James Tadd Adcox', author: '', publisher: 'The Brooklyn Rail', year: '2017', url: 'https://brooklynrail.org/2017/06/books/Fat-Beautiful-Stinking-Bookmarks'},
                {title: 'Finding Comfort in the Discomfort: Talking with Juan Martinez', author: '', publisher: 'The Rumpus', year: '2017', url: 'https://therumpus.net/2017/07/10/the-rumpus-interview-with-juan-martinez/'},
                {title: 'Natural Wonders', author: 'Angela Woodward', publisher: 'American Book Review', year: '2016', url: ''},
                {title: 'The Miner', author: 'Natsume Sōseki', publisher: 'American Book Review', year: '2016', url: 'https://muse.jhu.edu/article/627856'},
                {title: 'Small Objects in a Grand Universe: A Conversation with Amber Sparks', author: '', publisher: 'Vol. 1 Brooklyn', year: '2016', url: 'https://vol1brooklyn.com/2016/04/12/small-objects-in-a-grand-universe-a-conversation-with-amber-sparks/'},
                {title: 'The Revelator', author: 'Robert Kloss', publisher: 'The Spectacle', year: '2016', url: 'https://thespectacle.wustl.edu/?p=200'},
                {title: 'This System Speaks a Language That Hardly Anyone Understands: A Conversation with Bette Adriaanse', author: '', publisher: 'MAKE Magazine', year: '2016', url: 'https://www.makemag.com/bette-adriaanse/'},
                {title: 'The Absolution of Roberto Acestes Laing', author: 'Nicholas Rombes', publisher: 'American Book Review', year: '2015', url: 'https://muse.jhu.edu/article/578863/pdf'},

                // {title: '', author: '', publisher: '', year: '', url: ''},
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