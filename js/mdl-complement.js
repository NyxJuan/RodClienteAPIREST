! function () {
    "use strict";
    var e = function (e) {
        this.element_ = e, this.init()
    };
    window.MaterialSelectfield = e, e.prototype.Constant_ = {}, e.prototype.CssClasses_ = {
        LABEL: "mdl-selectield__label",
        SELECT: "mdl-selectfield__select",
        IS_DIRTY: "is-dirty",
        IS_FOCUSED: "is-focused",
        IS_DISABLED: "is-disabled",
        IS_INVALID: "is-invalid",
        IS_UPGRADED: "is-upgraded"
    }, e.prototype.onFocus_ = function (e) {
        this.element_.classList.add(this.CssClasses_.IS_FOCUSED)
    }, e.prototype.onBlur_ = function (e) {
        this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)
    }, e.prototype.onReset_ = function (e) {
        this.updateClasses_()
    }, e.prototype.updateClasses_ = function () {
        this.checkDisabled(), this.checkValidity(), this.checkDirty()
    }, e.prototype.checkDisabled = function () {
        this.select_.disabled ? this.element_.classList.add(this.CssClasses_.IS_DISABLED) : this.element_.classList.remove(this.CssClasses_.IS_DISABLED)
    }, e.prototype.checkDisabled = e.prototype.checkDisabled, e.prototype.checkValidity = function () {
        this.select_.validity.valid ? this.element_.classList.remove(this.CssClasses_.IS_INVALID) : this.element_.classList.add(this.CssClasses_.IS_INVALID)
    }, e.prototype.checkValidity = e.prototype.checkValidity, e.prototype.checkDirty = function () {
        this.select_.value && this.select_.value.length > 0 ? this.element_.classList.add(this.CssClasses_.IS_DIRTY) : this.element_.classList.remove(this.CssClasses_.IS_DIRTY)
    }, e.prototype.checkDirty = e.prototype.checkDirty, e.prototype.disable = function () {
        this.select_.disabled = !0, this.updateClasses_()
    }, e.prototype.disable = e.prototype.disable, e.prototype.enable = function () {
        this.select_.disabled = !1, this.updateClasses_()
    }, e.prototype.enable = e.prototype.enable, e.prototype.change = function (e) {
        e && (this.select_.value = e), this.updateClasses_()
    }, e.prototype.change = e.prototype.change, e.prototype.init = function () {
        if (this.element_ && (this.label_ = this.element_.querySelector("." + this.CssClasses_.LABEL), this.select_ = this.element_.querySelector("." + this.CssClasses_.SELECT), this.select_)) {
            if (this.boundUpdateClassesHandler = this.updateClasses_.bind(this), this.boundFocusHandler = this.onFocus_.bind(this), this.boundBlurHandler = this.onBlur_.bind(this), this.boundResetHandler = this.onReset_.bind(this), this.select_.addEventListener("change", this.boundUpdateClassesHandler), this.select_.addEventListener("focus", this.boundFocusHandler), this.select_.addEventListener("blur", this.boundBlurHandler), this.select_.addEventListener("reset", this.boundResetHandler), "function" == typeof MaterialMenu) {
                var e = this,
                    t = "plc-" + (new Date).getTime(),
                    s = document.createElement("div");
                if (s.id = t, s.classList.add("mdl-selectfield__placeholder"), s.innerHTML = '<i class="material-icons" tabindex="-1">arrow_drop_down</i>', s.addEventListener("click", function () {
                        e.select_.focus()
                    }), this.element_.appendChild(s), this.options_ = this.select_.querySelectorAll("option"), this.options_.length) {
                    var i = document.createElement("ul");
                    i.classList.add("mdl-menu"), i.classList.add("mdl-js-menu"), i.classList.add("mdl-js-ripple-effect"), i.tabIndex = "-1", i.setAttribute("for", t), i.addEventListener("mousewheel", function (e) {
                        (this.scrollTop === this.scrollHeight - this.offsetHeight && e.wheelDelta < 0 || 0 === this.scrollTop && e.wheelDelta > 0) && e.preventDefault()
                    });
                    for (var l = 0; l < this.options_.length; l++) {
                        var n = this.options_[l],
                            a = ((n.textContent || "").toUpperCase().replace(/( )|(\n)/g, ""), document.createElement("li"));
                        a.textContent = n.textContent, a.classList.add("mdl-menu__item"), a.setAttribute("data-value", l), a.tabIndex = "-1", a.addEventListener("mousedown", function () {
                            e.select_.selectedIndex = this.getAttribute("data-value"), e.updateClasses_()
                        }), i.appendChild(a), this.element_.appendChild(i)
                    }
                }
                componentHandler.upgradeDom("MaterialMenu")
            }
            this.updateClasses_(), this.element_.classList.add(this.CssClasses_.IS_UPGRADED)
        }
    }, e.prototype.mdlDowngrade_ = function () {
        this.select_.removeEventListener("change", this.boundUpdateClassesHandler), this.select_.removeEventListener("focus", this.boundFocusHandler), this.select_.removeEventListener("blur", this.boundBlurHandler), this.select_.removeEventListener("reset", this.boundResetHandler)
    }, componentHandler.register({
        constructor: e,
        classAsString: "MaterialSelectfield",
        cssClass: "mdl-js-selectfield",
        widget: !0
    })
}();
//# sourceMappingURL=mdl-selectfield.min.js.map