document.addEventListener('DOMContentLoaded', function() {
    const productImages = {
        // ===== Bed Frames =====
        '__product_one_target': {
            '__color_option_one': {
                default: 'assets/img/bed/product_1.webp',
                hover: 'assets/img/bed/product_1-hover.webp'
            },
            '__color_option_two': {
                default: 'assets/img/bed/product_2.webp',
                hover: 'assets/img/bed/product_2-hover.webp'
            },
            '__color_option_three': {
                default: 'assets/img/bed/product_3.webp',
                hover: 'assets/img/bed/product_3-hover.webp'
            }
        },
        '__product_two_target': {
            '__color_option_one': {
                default: 'assets/img/bed/product_2.webp',
                hover: 'assets/img/bed/product_2-hover.webp'
            },
            '__color_option_two': {
                default: 'assets/img/bed/product_3.webp',
                hover: 'assets/img/bed/product_3-hover.webp'
            },
            '__color_option_three': {
                default: 'assets/img/bed/product_4.webp',
                hover: 'assets/img/bed/product_4-hover.webp'
            }
        },
        '__product_three_target': {
            '__color_option_one': {
                default: 'assets/img/bed/product_3.webp',
                hover: 'assets/img/bed/product_3-hover.webp'
            },
            '__color_option_two': {
                default: 'assets/img/bed/product_4.webp',
                hover: 'assets/img/bed/product_4-hover.webp'
            },
            '__color_option_three': {
                default: 'assets/img/bed/product_5.webp',
                hover: 'assets/img/bed/product_5-hover.jpg'
            }
        },
        '__product_four_target': {
            '__color_option_one': {
                default: 'assets/img/bed/product_4.webp',
                hover: 'assets/img/bed/product_4-hover.webp'
            },
            '__color_option_two': {
                default: 'assets/img/bed/product_5.webp',
                hover: 'assets/img/bed/product_5-hover.jpg'
            },
            '__color_option_three': {
                default: 'assets/img/bed/product_6.webp',
                hover: 'assets/img/bed/product_6-hover.webp'
            }
        },
        '__product_five_target': {
            '__color_option_one': {
                default: 'assets/img/bed/product_5.webp',
                hover: 'assets/img/bed/product_5-hover.jpg'
            },
            '__color_option_two': {
                default: 'assets/img/bed/product_6.webp',
                hover: 'assets/img/bed/product_6-hover.webp'
            },
            '__color_option_three': {
                default: 'assets/img/bed/product_7.webp',
                hover: 'assets/img/bed/product_7-hover.webp'
            }
        },
        '__product_six_target': {
            '__color_option_one': {
                default: 'assets/img/bed/product_6.webp',
                hover: 'assets/img/bed/product_6-hover.webp'
            },
            '__color_option_two': {
                default: 'assets/img/bed/product_7.webp',
                hover: 'assets/img/bed/product_7-hover.webp'
            },
            '__color_option_three': {
                default: 'assets/img/bed/product_1.webp',
                hover: 'assets/img/bed/product_1-hover.webp'
            }
        },
        '__product_seven_target': {
            '__color_option_one': {
                default: 'assets/img/bed/product_7.webp',
                hover: 'assets/img/bed/product_7-hover.webp'
            },
            '__color_option_two': {
                default: 'assets/img/bed/product_1.webp',
                hover: 'assets/img/bed/product_1-hover.webp'
            },
            '__color_option_three': {
                default: 'assets/img/bed/product_2.webp',
                hover: 'assets/img/bed/product_2-hover.webp'
            }
        },

        // ===== Headboards =====
        '__headboard_one_target': {
            '__color_option_one': {
                default: 'assets/img/headboards/product_1.webp',
                hover: 'assets/img/headboards/product_1-hover.webp'
            },
            '__color_option_two': {
                default: 'assets/img/headboards/product_2.webp',
                hover: 'assets/img/headboards/product_2-hover.webp'
            }
        },
        '__headboard_two_target': {
            '__color_option_one': {
                default: 'assets/img/headboards/product_2.webp',
                hover: 'assets/img/headboards/product_2-hover.webp'
            },
            '__color_option_two': {
                default: 'assets/img/headboards/product_1.webp',
                hover: 'assets/img/headboards/product_1-hover.webp'
            },
            '__color_option_three': {
                default: 'assets/img/headboards/product_2.webp',
                hover: 'assets/img/headboards/product_2-hover.webp'
            }
        }
    };

    const productCards = document.querySelectorAll('.__product_card');

    productCards.forEach(card => {
        const colorSelection = card.querySelector('[class*="__product_color_selection"]');
        if (!colorSelection) return;

        const colorOptions = colorSelection.querySelectorAll('[class*="__color_option"]');

        let productClass = null;
        card.classList.forEach(cls => {
            if (cls.includes('_target')) {
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
                    if (cls.includes('__color_option')) {
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
