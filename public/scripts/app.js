"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.handlePick = _this.handlePick.bind(_this);
    _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
    _this.handleAddOption = _this.handleAddOption.bind(_this);
    _this.state = {
      options: []
    };
    return _this;
  }

  _createClass(IndecisionApp, [{
    key: "handlePick",
    value: function handlePick() {
      var randomNum = Math.floor(Math.random() * this.state.options.length);
      var option = this.state.options[randomNum];
      console.log(option);
    }
  }, {
    key: "handleDeleteOption",
    value: function handleDeleteOption() {
      this.setState(function () {
        return {
          options: []
        };
      });
    }
  }, {
    key: "handleAddOption",
    value: function handleAddOption(option) {
      if (!option) {
        return "Enter valid value to add item";
      } else if (this.state.options.indexOf(option) > -1) {
        return "This option already exists";
      }

      this.setState(function (prevState) {
        return {
          options: prevState.options.concat(option)
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var title = "indecision";
      var subtitle = "Put your life in the hands of a computer";

      return React.createElement(
        "div",
        null,
        React.createElement(Header, { title: title, subtitle: subtitle }),
        React.createElement(Action, {
          hasOptions: this.state.options.length > 0,
          handlePick: this.handlePick
        }),
        React.createElement(Options, {
          options: this.state.options,
          handleDeleteOption: this.handleDeleteOption
        }),
        React.createElement(AddOptions, { handleAddOption: this.handleAddOption })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

var Header = function (_React$Component2) {
  _inherits(Header, _React$Component2);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          this.props.title
        ),
        React.createElement(
          "h2",
          null,
          this.props.subtitle
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var Action = function (_React$Component3) {
  _inherits(Action, _React$Component3);

  function Action(props) {
    _classCallCheck(this, Action);

    var _this3 = _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).call(this, props));

    _this3.handleClick = _this3.handleClick.bind(_this3);
    return _this3;
  }

  _createClass(Action, [{
    key: "handleClick",
    value: function handleClick() {
      this.props.handlePick();
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "button",
          { onClick: this.handleClick, disabled: !this.props.hasOptions },
          "What should I do?"
        )
      );
    }
  }]);

  return Action;
}(React.Component);

var Option = function (_React$Component4) {
  _inherits(Option, _React$Component4);

  function Option() {
    _classCallCheck(this, Option);

    return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
  }

  _createClass(Option, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "p",
        null,
        this.props.option
      );
    }
  }]);

  return Option;
}(React.Component);

var Options = function (_React$Component5) {
  _inherits(Options, _React$Component5);

  function Options(props) {
    _classCallCheck(this, Options);

    var _this5 = _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).call(this, props));

    _this5.handleRemoveAll = _this5.handleRemoveAll.bind(_this5);
    return _this5;
  }

  _createClass(Options, [{
    key: "handleRemoveAll",
    value: function handleRemoveAll() {
      this.props.handleDeleteOption();
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "button",
          { onClick: this.handleRemoveAll },
          "Remove All"
        ),
        this.props.options.map(function (option) {
          return React.createElement(Option, { key: option, option: option });
        })
      );
    }
  }]);

  return Options;
}(React.Component);

var AddOptions = function (_React$Component6) {
  _inherits(AddOptions, _React$Component6);

  function AddOptions(props) {
    _classCallCheck(this, AddOptions);

    var _this6 = _possibleConstructorReturn(this, (AddOptions.__proto__ || Object.getPrototypeOf(AddOptions)).call(this, props));

    _this6.handleAddOption = _this6.handleAddOption.bind(_this6);
    _this6.state = { error: undefined };
    return _this6;
  }

  _createClass(AddOptions, [{
    key: "handleAddOption",
    value: function handleAddOption(e) {
      e.preventDefault();

      var option = e.target.elements.option.value.trim();
      var error = this.props.handleAddOption(option);

      this.setState(function () {
        return {
          error: error
        };
      });

      e.target.elements.option.value = "";
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        this.state.error && React.createElement(
          "p",
          null,
          this.state.error
        ),
        React.createElement(
          "form",
          { onSubmit: this.handleAddOption },
          React.createElement("input", { type: "text", name: "option" }),
          React.createElement(
            "button",
            null,
            "Add Option"
          )
        )
      );
    }
  }]);

  return AddOptions;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById("app"));