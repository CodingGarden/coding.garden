<script>
import Router, { push } from 'svelte-spa-router';
import routes from './routes';

push('/');
</script>

<Router {routes}/>