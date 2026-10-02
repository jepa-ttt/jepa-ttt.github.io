# JEPA-TTT project website

Academic project page for **JEPA-TTT: Persistent Test-Time Training of Latent World Models for Planning under Dynamics Shifts**.

Website: https://jepa-ttt.github.io/

The page uses the [Academic Project Page Template](https://github.com/eliahuhorwitz/Academic-project-page-template) by Eliahu Horwitz (revision `d38af1ccae1ce82c3404d2820c4c646afd409f81`), based on [Nerfies](https://nerfies.github.io/). The original Bulma and template styles are retained; project-specific layout and accessibility adjustments are in `static/css/project.css`.

## Local preview

```sh
python3 -m http.server 8000
```

Open http://localhost:8000. The website is static and needs no build step. GitHub Pages can serve the root of the `main` branch; `.nojekyll` disables Jekyll processing.

## Content and assets

- `index.html`: paper title, linked authors, workshop text, abstract, method, evaluation, results, ablations, and BibTeX.
- `static/images/`: figures rendered from the manuscript's PDF figures; `favicon.svg` is a project monogram.
- `static/pdfs/jepa-ttt.pdf`: full paper, including the appendix, compiled from the supplied LaTeX manuscript.
- `static/citation.bib`: downloadable citation, also displayed on the page.
- `static/js/index.js`: copy citation and scroll-to-top interactions.

The ablation section presents the full dense replay comparison as an HTML table using the page's existing results-table style, with values and bold winners transcribed from `sections/dense_ablation_table.tex`. The supplied `static/images/dense_replay.png` is retained as a source asset. A separate text summary reports the matched persistence-versus-reset control: mean best score increases from 0.289 to 0.729 and mean AUC from 0.273 to 0.637.

The source manuscript is `main.tex` and its included `sections/` and `figures/` files in the supplied JEPA-TTT preprint directory. Numerical results and captions follow that manuscript. The dagger marker denotes work done during an internship at Honda Research Institute USA. The Paper button links to the [arXiv paper](https://arxiv.org/abs/2610.00722), and the displayed and downloadable citations include its arXiv identifier. No PDF or code button is shown; the compiled PDF remains available to scholarly indexing metadata.

The local `release/` folder contains release drafts and video assets and is excluded from Git.

The PDF was compiled with Tectonic 0.17.0 from a temporary copy of the manuscript. The pdfTeX-only `\pdfminorversion=4` assignment was guarded with `\ifdefined\pdfminorversion ... \fi` for XeTeX compatibility; the original manuscript files were not changed. Figures were rendered with `pdftoppm -png -singlefile -scale-to 2200`.

The venue is displayed as plain text: World Models in Physical AI Workshop @ NeurIPS 2026. The title uses a wider desktop container, while the author list and page content retain their existing widths.

Author names link to verified personal homepages where available. Hossein Nourkhiz Mahjoub, Ehsan Moradi Pari, and Vaishnav Tadiparthi link to the Google Scholar profiles listed on [Nakul Agarwal's homepage](https://lukan94.github.io/).

## Attribution and license

The website template and its adaptations are licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). The upstream attribution is retained in the page footer. Research content and figures are credited to the JEPA-TTT authors. Bulma retains its MIT license notice in the distributed stylesheet.
