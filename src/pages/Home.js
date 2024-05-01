import React from "react";
import { connect } from "react-redux";
import { increment, decrement, reset } from "../actions/actions";

function Home({ count, increment, decrement, reset }) {
  return (
    <div>
      <button onClick={decrement}>-</button>
      <h1>Count {count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={reset}></button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  count: state.count,
});

export default connect(mapStateToProps, { increment, decrement, reset })(Home);
