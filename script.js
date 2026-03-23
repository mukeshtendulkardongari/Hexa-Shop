function scrollCarousel(trackId, direction) {
    const track = document.getElementById(trackId);
    const card = track.querySelector('.product-item');
    const step = card.offsetWidth;

    // 1. Move the scroll smoothly
    track.scrollBy({
        left: direction * step,
        behavior: 'smooth'
    });

    // 2. Infinite Loop Teleportation
    setTimeout(() => {
        const currentScroll = track.scrollLeft;
        const maxScroll = track.scrollWidth - track.clientWidth;

        // If at the end of clones, jump back to start
        if (currentScroll >= maxScroll - 10) {
            track.scrollTo({ left: 0, behavior: 'instant' });
        }
        // If at the start and trying to go back, jump to end
        else if (currentScroll <= 10 && direction === -1) {
            track.scrollTo({ left: maxScroll, behavior: 'instant' });
        }
    }, 600); // Wait for smooth scroll to finish
}