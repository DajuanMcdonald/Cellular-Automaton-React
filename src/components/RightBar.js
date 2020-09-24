import React from "react";

function RightBar() {
  return (
    <>
      <div className="right-bar">
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModalLong"
        >
          Description
        </button>

        <div
          className="modal fade"
          id="exampleModalLong"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLongTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  Conway's: Game of Life
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true"></span>
                </button>
              </div>
              <div className="modal-body">
                ...The universe of the Game of Life is an infinite,
                two-dimensional orthogonal grid of square cells, each of which
                is in one of two possible states, live or dead, (or populated
                and unpopulated, respectively). Every cell interacts with its
                eight neighbours, which are the cells that are horizontally,
                vertically, or diagonally adjacent.
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RightBar;