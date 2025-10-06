document.addEventListener('DOMContentLoaded', function() {
    const productImages = {
        // ===== Bed Frames =====
        'product-one-target': {
            'color-option-one': {
                default: 'assets/img/bed/product_1.webp',
                hover: 'assets/img/bed/product_1-hover.webp'
            },
            'color-option-two': {
                default: 'assets/img/bed/product_2.webp',
                hover: 'assets/img/bed/product_2-hover.webp'
            },
            'color-option-three': {
                default: 'assets/img/bed/product_3.webp',
                hover: 'assets/img/bed/product_3-hover.webp'
            }
        },
        'product-two-target': {
            'color-option-one': {
                default: 'assets/img/bed/product_2.webp',
                hover: 'assets/img/bed/product_2-hover.webp'
            },
            'color-option-two': {
                default: 'assets/img/bed/product_3.webp',
                hover: 'assets/img/bed/product_3-hover.webp'
            },
            'color-option-three': {
                default: 'assets/img/bed/product_4.webp',
                hover: 'assets/img/bed/product_4-hover.webp'
            }
        },
        'product-three-target': {
            'color-option-one': {
                default: 'assets/img/bed/product_3.webp',
                hover: 'assets/img/bed/product_3-hover.webp'
            },
            'color-option-two': {
                default: 'assets/img/bed/product_4.webp',
                hover: 'assets/img/bed/product_4-hover.webp'
            },
            'color-option-three': {
                default: 'assets/img/bed/product_5.webp',
                hover: 'assets/img/bed/product_5-hover.jpg'
            }
        },
        'product-four-target': {
            'color-option-one': {
                default: 'assets/img/bed/product_4.webp',
                hover: 'assets/img/bed/product_4-hover.webp'
            },
            'color-option-two': {
                default: 'assets/img/bed/product_5.webp',
                hover: 'assets/img/bed/product_5-hover.jpg'
            },
            'color-option-three': {
                default: 'assets/img/bed/product_6.webp',
                hover: 'assets/img/bed/product_6-hover.webp'
            }
        },
        'product-five-target': {
            'color-option-one': {
                default: 'assets/img/bed/product_5.webp',
                hover: 'assets/img/bed/product_5-hover.jpg'
            },
            'color-option-two': {
                default: 'assets/img/bed/product_6.webp',
                hover: 'assets/img/bed/product_6-hover.webp'
            },
            'color-option-three': {
                default: 'assets/img/bed/product_7.webp',
                hover: 'assets/img/bed/product_7-hover.webp'
            }
        },
        'product-six-target': {
            'color-option-one': {
                default: 'assets/img/bed/product_6.webp',
                hover: 'assets/img/bed/product_6-hover.webp'
            },
            'color-option-two': {
                default: 'assets/img/bed/product_7.webp',
                hover: 'assets/img/bed/product_7-hover.webp'
            },
            'color-option-three': {
                default: 'assets/img/bed/product_1.webp',
                hover: 'assets/img/bed/product_1-hover.webp'
            }
        },
        'product-seven-target': {
            'color-option-one': {
                default: 'assets/img/bed/product_7.webp',
                hover: 'assets/img/bed/product_7-hover.webp'
            },
            'color-option-two': {
                default: 'assets/img/bed/product_1.webp',
                hover: 'assets/img/bed/product_1-hover.webp'
            },
            'color-option-three': {
                default: 'assets/img/bed/product_2.webp',
                hover: 'assets/img/bed/product_2-hover.webp'
            }
        },

        // ===== Headboards =====
        'headboard-one-target': {
            'color-option-one': {
                default: 'assets/img/headboards/product_1.webp',
                hover: 'assets/img/headboards/product_1-hover.webp'
            },
            'color-option-two': {
                default: 'assets/img/headboards/product_2.webp',
                hover: 'assets/img/headboards/product_2-hover.webp'
            }
        },
        'headboard-two-target': {
            'color-option-one': {
                default: 'assets/img/headboards/product_2.webp',
                hover: 'assets/img/headboards/product_2-hover.webp'
            },
            'color-option-two': {
                default: 'assets/img/headboards/product_1.webp',
                hover: 'assets/img/headboards/product_1-hover.webp'
            },
            'color-option-three': {
                default: 'assets/img/headboards/product_2.webp',
                hover: 'assets/img/headboards/product_2-hover.webp'
            }
        }
    };

    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        const colorSelection = card.querySelector('[class*="product-color-selection"]');
        if (!colorSelection) return;

        const colorOptions = colorSelection.querySelectorAll('[class*="color-option"]');

        let productClass = null;
        card.classList.forEach(cls => {
            if (cls.includes('-target')) {
                productClass = cls;
            }
        });

        if (!productClass || !productImages[productClass]) return;

        const defaultImg = card.querySelector('[class*="hide"]');
        const hoverImg = card.querySelector('[class*="show"]');

        if (!defaultImg || !hoverImg) return;

        if (colorOptions.length > 0) {
            colorOptions[0].classList.add('active-color');
        }

        colorOptions.forEach(colorOption => {
            colorOption.style.cursor = 'pointer';
            colorOption.style.transition = 'all 0.3s ease';

            colorOption.addEventListener('click', function(e) {
                e.stopPropagation();

                colorOptions.forEach(opt => opt.classList.remove('active-color'));
                this.classList.add('active-color');

                let colorClass = null;
                this.classList.forEach(cls => {
                    if (cls.includes('color-option')) {
                        colorClass = cls;
                    }
                });

                if (colorClass && productImages[productClass][colorClass]) {
                    const newImages = productImages[productClass][colorClass];

                    defaultImg.style.opacity = '0';
                    hoverImg.style.opacity = '0';

                    setTimeout(() => {
                        defaultImg.src = newImages.default;
                        hoverImg.src = newImages.hover;

                        defaultImg.style.opacity = '1';
                        hoverImg.style.opacity = '1';
                    }, 150);
                }
            });
        });
    });
});
