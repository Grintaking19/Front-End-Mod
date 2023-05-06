import styles from "./BasicInfo.module.css";

import Panel from "../../../layouts/UI/Panel";
import { BasicinfoIcon } from "../../../layouts/UI/SvgImages";
import Dropdown from "../fields/Dropdown";
import HorizontalFlex from "../../../layouts/UI/HorizontalFlex";
import Button from "../../../layouts/UI/Button";
import Tag from "../../../layouts/UI/Tag";
import SubHeader from "../../../layouts/UI/SubHeader";
import InputField from "../fields/InputField";
import { Types, Categories, SubCategories, Tags } from "../Data";
import TagsList from "../fields/TagsList";
import { useState , useEffect} from "react";

const BasicInfo = (props) => {
  let [choosenTag, setChoosenTag] = useState([]);
  let [tagList, setTagList] = useState(Tags);
  let [textBoxValue, setTextBoxValue] = useState("");
  const [eventinfo, setEventInfo] = useState({
    Title: "",
    Type: "",
    Category: "",
    SubCategory: "",

  });
const [AlreadyExists , setAlreadyExists] = useState(false);
const [tagsLimitReached , setTagsLimitReached] = useState(0);
const [regexRule, setRegexRule] = useState(true);


  //Event Name Handler
  const EventTitleInputHandler = (e) => {
    props.onChange({ ...eventinfo, Title: e.target.value },choosenTag);
    setEventInfo({ ...eventinfo, Title: e.target.value });
  };
  const Typehandler = (e) => {
    props.onChange({ ...eventinfo, Type: e.target.value },choosenTag);
    setEventInfo({ ...eventinfo, Type: e.target.value });
  };
  const CategoryHandler = (e) => {
    props.onChange({ ...eventinfo, Category: e.target.value },choosenTag);
    setEventInfo({ ...eventinfo, Category: e.target.value });

  };
  const SubCategoryHandler = (e) => {
    props.onChange({ ...eventinfo, SubCategory: e.target.value },choosenTag);
    setEventInfo({ ...eventinfo, SubCategory: e.target.value });
  };

  //Tags Handlers
  const chooseTagHandler = (e) => {
    if (e.currentTarget.firstChild == null) return;
    if (choosenTag.length < 10) {
      //TBH I don't know why this is needed, but it is
      let x = e.currentTarget.firstChild.id;

      setChoosenTag((state) => [...state, x]);
      tagList = tagList.filter((a) => a.name !== e.currentTarget.firstChild.id);
      setTagList((state) => [...tagList]);
      setTextBoxValue("");
      setAlreadyExists(false);

    }
    else{
      setTagsLimitReached(true);
    }
    setTextBoxValue("");

  };

  const cancelTagHandler = (e) => {
    choosenTag = choosenTag.filter((a) => a !== e.currentTarget.firstChild.id);
    setChoosenTag((state) => [...choosenTag]);
    setTagsLimitReached(false);


    if (
      Tags.find((element) => element.name == e.currentTarget.firstChild.id) !=
      undefined
    ) {
      let removed_tag = Tags.find(
        (tag) => tag.name == e.currentTarget.firstChild.id
      );
      setTagList((state) => [...tagList, removed_tag]);
    }
  };

  const tagTextChangeHandler = (e) => {
    setTextBoxValue(e.target.value);
  };

  const typedTagHandler = (e) => {
    let regex =/[\W\s\[\]\(\)\{\}-]/;

      if (
      textBoxValue != "" &&
      choosenTag.includes(textBoxValue) == false &&
      choosenTag.length < 10 &&
      textBoxValue.match(regex) ==null
    ) {
      setChoosenTag((state) => [...state, textBoxValue]);
      setTextBoxValue("");
      tagList = tagList.filter((a) => a.name !== textBoxValue);
      setTagList((state) => [...tagList]);
      setAlreadyExists(false);
      setRegexRule(true);

    }
    else{
       if (choosenTag.length >= 10){
        setTagsLimitReached(true);
       }
      else if (choosenTag.includes(textBoxValue))
      setAlreadyExists(true);

      else if (textBoxValue.match(regex) !=null)
      setRegexRule(false); 
    }

  };

  return (
    <Panel
      image={BasicinfoIcon}
      title="Basic Info"
      description="Name your event and tell event-goers why they should come. Add details that highlight what makes it unique."
      style={{ width: "46%" }}
    >
      <InputField
        title="Event Title"
        required={1}
        onChange={EventTitleInputHandler}


      />

      <HorizontalFlex>
        <Dropdown options={Types} width="30%" onChange={Typehandler} id="type" />
        <Dropdown options={Categories} width="30%" onChange={CategoryHandler} id="category" />
        <Dropdown
          options={SubCategories}
          width="30%"
          onChange={SubCategoryHandler}
          id="subcategory"
        />
      </HorizontalFlex>

      <SubHeader
        title="Tags"
        description="Improve discoverability of your event by adding tags relevant to the subject matter."
      />

      <HorizontalFlex>
        <TagsList
          options={tagList}
          width={540}
          onClick={chooseTagHandler}
          onTextChange={tagTextChangeHandler}
          textBoxValue={textBoxValue}
          TagsCount={choosenTag.length}
          Tagslimit = {tagsLimitReached}
          AlreadyChoosen={AlreadyExists}
          CharsValid = {regexRule}
        />
        <Button onClick={typedTagHandler} id="add-tag-btn">Add</Button>
      </HorizontalFlex>

      <div className={styles['tags-div']}>
        {choosenTag.map((tag) => {
          return (
            <Tag key={tag} id={tag} onCancel={cancelTagHandler}>
              {tag}
            </Tag>
          );
        })}
      </div>
    </Panel>
  );
};

export default BasicInfo;
