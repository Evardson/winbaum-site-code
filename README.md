# winbaum-site-code

Shared JavaScript for [wnbaum.com](https://www.wnbaum.com), served through jsDelivr so it is cached once instead of being repeated inside every page's HTML.

| File | What it runs | Webflow component |
| --- | --- | --- |
| `wbq.js` | The quote pop-up (expert review form, PDF scenario, lead tracking). Its CSS is injected by the script. | ROI Expert Questionnaire |
| `roi-calc.js` | The rental ROI calculator. Its CSS and markup stay inside the Webflow embed. | ROI Calculator |

## How the site loads it

Each Webflow embed loads one file from a fixed commit, for example:

```html
<script src="https://cdn.jsdelivr.net/gh/Evardson/winbaum-site-code@<commit>/wbq.js"
        integrity="sha384-..." crossorigin="anonymous" defer></script>
```

Pinning the commit means a change here never reaches the live site by accident.

## Changing the code

1. Edit the file here and commit.
2. Copy the new commit hash and work out the new SRI hash (`openssl dgst -sha384 -binary wbq.js | openssl base64 -A`).
3. Update the `src` and `integrity` in the Webflow embed, then publish the site.

The ROI Expert Questionnaire embed also keeps one inline rule, `[data-wbq]{display:none!important}`, so Webflow's hidden form never flashes on screen before the script loads.
