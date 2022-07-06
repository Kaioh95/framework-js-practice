<!--Quiz /-->
<!--<Tab options={options} contents={contents}/-->
<!--TabFom/-->
<TabPage/>

<script>
import './assets/base.css';
import Quiz from './components/quiz.svelte'
import Tab from './components/tab.svelte'
import TabForm from './components/tab-form.svelte';
import TabPage from './components/tab-page.svelte';

const options = ['tab 1', 'tab 2', 'tab 3', 'tab 4']
const contents = [
    'Texto do primeiro tab',
    'Texto do segundo tab',
    'Texto do terceiro tab',
    'Texto do quarto tab'
]
</script>

