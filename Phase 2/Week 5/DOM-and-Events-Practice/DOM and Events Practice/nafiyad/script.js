<script>
    const radios = document.querySelectorAll('input[name="color"]');
    radios.forEach(radio => {
        radio.addEventListener('change', (event) => {
            document.body.style.backgroundColor = event.target.value;
        });
    });
</script>
