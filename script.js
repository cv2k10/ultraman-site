const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); navigation.classList.toggle('open', open); });
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { menu.setAttribute('aria-expanded', 'false'); navigation.classList.remove('open'); navigation.querySelector('.active')?.classList.remove('active'); link.classList.add('active'); }));
const details = {
 original: ['THE ORIGINAL', '1966 – Ultraman. The beginning of a legacy of courage, kindness and hope.', 'original'],
 legends: ['THE LEGENDS', 'Ultraseven and beyond. A legacy carried forward by generations of heroes.', 'legends'],
 generation: ['THE NEXT GENERATION', 'New heroes. Same spirit. The courage to stand for a brighter tomorrow.', 'generation'],
 forever: ['FOREVER', 'The hero in all of us. Bringing joy and hope to children and families around the world.', 'forever'],
 watch: ['WATCH THE LEGEND', 'The legend begins with Ultraman. A film is not available in this preview; a video URL is needed to enable playback.', 'original'],
 news: ['NEWS', 'There are no news updates in this preview yet. Explore the legacy below.', null]
};
const dialog = document.querySelector('#detail');
document.querySelectorAll('[data-detail]').forEach(button => button.addEventListener('click', () => {const [title, description, image] = details[button.dataset.detail]; document.querySelector('#detail-title').textContent = title; document.querySelector('#detail-description').textContent = description; const img = document.querySelector('#detail-image'); img.hidden = !image; if (image) {img.src = `assets/${image}.png`; img.alt = title;} dialog.showModal();}));
document.querySelector('.close').addEventListener('click', () => dialog.close());
document.querySelector('.dialog-done').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {if(event.target === dialog){const rect=dialog.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)dialog.close();}});
