<style>

    .machine {
        display: flex;
    }

    .success {
        padding: 5em;
        background: #0F0;
    }

    .box {
        padding: 5em;
    }
</style>

<script>
    let r1 = 1;
    let r2 = 1;
    let s = 1;

    let requiredR1 = 8;
    let requiredR2 = 1;

    function hebelLinks() {
        r1 += 3;
        r2++;

        r1 %= 10;
        r2 %= 10;
    }

    function hebelRechts() {
        r1++;
        r2 += 2;

        r1 %= 10;
        r2 %= 10;
    }

    function gruenerKnopf() {
        s = 1;
        r1 = 1;
        r2 = 1;
    }

    function grauerKnopf() {
        s++;

        if (s === 10) {
            s = 1;
        }

        r1 = s;
        r2 = s;
    }
</script>

<div class="machine">
    <div class="box">
        <h1>Puffer Links</h1>
        <p>Leuchtende Lampen: {r1}</p>
        <button on:click={hebelLinks}>Hebel Links</button>
    </div>
    <div class="box">
        <h1>Zentraler Kasten</h1>
        <p>Leuchtende Lampen: {s}</p>
        <button on:click={grauerKnopf}>Grauer Knopf</button>
        <button on:click={gruenerKnopf}>Grüner Knopf</button>
    </div>
    <div class="box">
        <h1>Puffer rechts</h1>
        <p>Leuchtende Lampen: {r2}</p>
        <button on:click={hebelRechts}>Hebel Rechts</button>
    </div>
</div>

{#if r1 === requiredR1 && r2 === requiredR2}
    <div class="success">Erfolgreich</div>
{:else}
    <div class="box">Ziel noch nicht erreicht</div>
{/if}