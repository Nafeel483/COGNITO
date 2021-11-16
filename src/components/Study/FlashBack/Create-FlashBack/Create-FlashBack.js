import React, { Component, createRef } from "react";
import ReactDOM from "react-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import colors from "../../../../assets/colors";
import {
  Button,
  Grid,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Menu,
  MenuItem,
  Switch,
  Typography,
  withStyles,
} from "@material-ui/core";
import { Add, DeleteOutline, TramSharp } from "@material-ui/icons";
import {
  FaChevronLeft,
  FaSeedling,
  FaStackExchange,
  FaTrash,
  FaTrashAlt,
} from "react-icons/fa";
import { withRouter } from "react-router";
import assets from "../../../../assets/assets";
import TextField from "../../../Utills/Inputs/TextField";


// fake data generator
const getItems = count =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `${k}`,
    content: "UI/UX",
  }));

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle
});

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: grid,
  width: 250
});


const styles = (theme) => ({
  back: {
    display: "flex",
    alignItems: "center",
    color: colors.primary,
    marginBottom: 30,
    cursor: 'pointer',
    fontWeight: 500,
    fontSize: 18
  },
  formWrapper: {
    paddingLeft: 20,
    marginTop: 20
  },
  editFlashCard: {
    fontWeight: 600,
    fontSize: 24,
  },
  titleNameForm: {
    fontWeight: 600,
    fontSize: 20,
    color: colors.primary,
  },
  searchInput: {
    width: "100%",
    height: 12,
    marginTop: 10,
  },
  nameWrapper: {
    fontSize: 20,
    border: "0.5px solid rgba(0, 0, 0, 0.3)",
    borderRadius: 10,
    padding: 20,
  },
  cardWrapper: {
    marginTop: 20,
    paddingLeft: 20,
  },
  cardInnerWrapper: {
    fontSize: 20,
    border: "0.5px solid rgba(0, 0, 0, 0.3)",
    borderRadius: 10,
  },
  actionBar: {
    borderBottom: "0.5px solid rgba(0, 0, 0, 0.3)",
    padding: "5px 30px",
    display: "flex",
    justifyContent: "space-between",
  },
  paragraph: {
    background: colors.grey,
    border: "2px solid #DFE1E6",
    boxSizing: "border-box",
    borderRadius: 3,
    overflow: "hidden",
    fontSize: 13,
    padding: 10,
  },
  contentForm: {
    padding: "10px 20px",
  },
  editName: {
    paddingTop: 18,
    marginLeft: 20
  },
  paragraphOuterWrapper: {
    padding: 20,
    fontSize: 14
  },
  addCard: {
    width: "100%",
    marginTop: 20,
    color: colors.primary,
    background: colors.white,
    border: "0.5px solid rgba(0, 0, 0, 0.3)",
  },
  save1: {
    display: 'flex',
    justifyContent: 'center',
    marginLeft: 30,
    marginTop: 5
  },
  save: {
    display: 'flex',
    justifyContent: 'center',
    margin: 20
  },
  saveBtn: {
    maxWidth: 300,
    width: 300
  },
  saveBtn1: {
    maxWidth: 300,
    width: 300,
    height: 30
  },
  searchInput1: {
    height: 65,
    width: 300,
    marginTop: 10
  }
});

class CreateFlashBack extends Component {
  constructor(props) {
    super(props);
    this.ref = createRef(null)
    this.state = {
      items: getItems(0),
      description: '',
      url: null,
      file: null,
      addCardName: '',
      changeDirection: null,
      number: 0,
      nameFlashCard: [{ id: 0, content: 'UI/UX' }, { id: 1, content: 'UI/UX' }]
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  changePosition = (key) => {
    if (this.state.changeDirection == key) {
      this.setState({
        changeDirection: null
      })
    }
    else {
      this.setState({
        changeDirection: key
      })
    }
  }

  handleGoBack = () => {
    const { history } = this.props;
    history.goBack()
  }
  FlashCardAddSet = () => {
    let len = this.state.items.length + 1
    let data = {
      id: len,
      content: this.state.addCardName
    }
    this.setState({
      // nameFlashCard: this.state.nameFlashCard.concat(data)
      items: getItems(len)
    })
  }

  handleChange = (e) => {
    this.setState({
      addCardName: e.target.value
    })
  }

  FlashCardAdd = () => {
    // let addNum = number
    // addNum = addNum + 1
    // SetNumber(addNum)
    if (this.state.addCardName == "") {
      alert("Please Add Name First")
    }
    // else {
    //   this.setState({
    //     // nameFlashCard: this.state.nameFlashCard.concat(this.state.addCardName),
    //     items:
    //   })
    //   // SetAddFlashCard(nameFlashCard => nameFlashCard.concat(addCardName))
    // }
  }
  RemoveFlashCard = (key) => {
    let removeData = []
    removeData = this.state.items.filter((item, index) => {
      return index != key
    })
    this.setState({
      items: removeData
    })
    // SetAddFlashCard(removeData)
  }



  handleClick = () => {
    if (this.ref?.current !== null) {
      this.ref.current.click()
    }
  }

  handleFileChange = (e) => {
    if (e.target && e.target.files && e.target.files.length > 0) {
      this.setState({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0])
      })

    }
  }



  onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    );

    this.setState({
      items
    });
  }

  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity
  render() {

    const { items, description, url, file, addCardName, changeDirection, number } = this.state
    const { classes } = this.props;
    return (
      <>
        <Grid container>
          <Grid item xs={12} onClick={this.handleGoBack} className={classes.back}>
            <FaChevronLeft /> &nbsp;&nbsp;&nbsp;Back
             </Grid>

          <Grid item xs={12} md={2}>
            <Typography className={classes.editFlashCard} variant="h5">Create Flashcards</Typography>
          </Grid>

          <Grid container xs={12} md={10}>

            <Grid item xs={12} md={11} className={classes.formWrapper} >
              <Grid container direction="column" className={classes.nameWrapper}>
                <Typography variant="h6" className={classes.titleNameForm}>
                  {"Flashcard Name"}
                </Typography>
                <div style={{ display: 'flex' }}>
                  <Grid item xs={8}>
                    <TextField
                      placeholder="Flashcard Name"
                      size="small"
                      className={classes.searchInput}
                      onChange={this.handleChange}
                      value={addCardName}
                      inputProps={{
                        className: classes.searchInput,
                      }}
                    />
                  </Grid>
                </div>
              </Grid>
            </Grid>
            <DragDropContext onDragEnd={this.onDragEnd}>
              <Droppable droppableId="droppable">
                {(provided, snapshot) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  // style={getListStyle(snapshot.isDraggingOver)}
                  >
                    {this.state.items.map((item, index) => (
                      <Draggable key={item.id} draggableId={item.id} index={index}>
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          // style={getItemStyle(
                          //   snapshot.isDragging,
                          //   provided.draggableProps.style
                          // )}
                          >
                            <Grid item xs={12} md={11} className={classes.cardWrapper}>
                              <Grid container direction="row" className={classes.cardInnerWrapper}>
                                <Grid item xs={12} className={classes.actionBar}>
                                  <div>{item.id}</div>
                                  <div className={classes.actions}>
                                    <FaStackExchange onClick={() => this.changePosition(index)} />
                                    <DeleteOutline onClick={() => this.RemoveFlashCard(index)} />
                                  </div>
                                </Grid>

                                <Grid container xs={12} className={classes.contentForm}>
                                  <Grid item xs={changeDirection == index ? 11 : 3} style={{
                                    paddingTop: 18,
                                    marginLeft: changeDirection == index ? 20 : 0
                                  }}>
                                    <TextField
                                      placeholder="UI/UX"
                                      value={item.content}
                                      size="small"
                                      className={classes.searchInput}
                                      inputProps={{
                                        className: classes.searchInput,
                                      }}
                                    />
                                  </Grid>

                                  <Grid item xs={changeDirection == index ? 12 : 6} className={classes.paragraphOuterWrapper}>
                                    {/* <div className={classes.paragraph}>
                          The visual part of a computer app or operating system, through
                          which an end-user interacts with the computing device or
                          software.
                         </div> */}
                                    <TextField
                                      placeholder="The visual part of a computer app or operating system, through
                          which an end-user interacts with the computing device or
                          software."
                                      value={description}
                                      size="small"
                                      className={classes.searchInput1}
                                      multiline
                                      rows={4}
                                      inputProps={{
                                        className: classes.searchInput1,
                                      }}
                                    />
                                  </Grid>

                                  <Grid item xs={changeDirection == index ? 12 : 3} style={{
                                    paddingTop: 18,
                                    marginLeft: changeDirection == index ? 20 : 0,
                                    cursor: 'pointer'
                                  }}
                                  >
                                    <input
                                      hidden
                                      ref={this.ref}
                                      id="files"
                                      accept="image/*"
                                      className={classes.inputFile}
                                      type="file"
                                      onChange={this.handleFileChange}
                                    />
                                    <div onClick={this.handleClick}>
                                      <img
                                        src={url ? url : assets.dragAndDrop}
                                        style={{ width: 100, height: 100 }}
                                      />
                                    </div>

                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {/* {provided.placeholder} */}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
            <Grid item xs={12} md={11} className={classes.cardWrapper}>
              <Grid item xs={12}>
                <Button className={classes.addCard} variant="contained"
                  onClick={this.FlashCardAddSet}
                >
                  <Add />
                  {"Add Card"}
                </Button>
              </Grid>


              <Grid item xs={12} className={classes.save}>
                <Button variant="contained" color="primary" className={classes.saveBtn}>
                  {"Save"}
                </Button>
              </Grid>

            </Grid>
          </Grid>
        </Grid >
      </>
    );
  }
}

// Put the thing into the DOM!
export default withRouter(withStyles(styles)(CreateFlashBack))

