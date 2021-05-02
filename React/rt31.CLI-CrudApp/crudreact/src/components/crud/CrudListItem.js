import React, {Component, PureComponent, Fragment} from "react";
//import Redux from "redux";
//import ReactRedux, {Provider} from "react-redux";
//import {BrowserRouter,Switch,Router,Route,IndexRoute,Link,IndexLink,NavLink} from "react-router-dom";
//import ReactDOM from "react-dom";



class CrudListItem extends React.Component {

    static defaultProps = {  /*  props의 디폴트 값 설정 */  }
    static propsTypes = {  /* props의 프로퍼티 타입 설정 */ }
    state = {
        // 상태값(변수)을 정의한다.
        isEditMode: false,
    }
    style = {
        // 컴포넌트 내부에서 사용할 인라인 스타일을 정의한다.
        // getter 를 사용하면 객체 내부 참조가 가능하다.

    }
    func = {
        // func에 정의된 메서드는 반드시 constructor에서 this를 bind() 처리해야 한다.
        // func에는 자식 컴포넌트에 넘길 메서드만 작성한다.
        // 왜 자식에게 부모 메서드를 넘기나? 부모의 상태값을 변경하기 위해서.

    }
    constructor(props) {
        super()
        // this 바인딩. 예시) this.handler = this.handler.bind(this)
        // func 에 정의한 메서드는 반드시 this bind 처리해야 한다.

        // ref 만들기. 예시) this.inputref = React.createRef()
        this.refUserName = React.createRef();
        this.refUserPower = React.createRef();

    }
    componentDidMount() {
        // 마운트 완료 후에 실행됨 : 페이지 load 될 때 한번
        // componentDidMount가 사용되는 경우: redux 구독 설정, focus 줄때
    }
    componentDidUpdate(prevProps, prevState) {
        // 업데이트 완료 후에 실행됨 : 여러번, state 가 변경될 때마다
    }
    componentWillUnmount() {
        // 언마운트 완료 후에 실행됨 : 페이지 unload 될 때 한번
        // componentWillUnmount가 사용되는 경우: redux 구독 해제, 이벤트 핸들러 해제
    }
    doDel = (event)=>{
        const {item} = this.props; // <==> const item = this.props.item;
        //부모 콜백 메서드 호출. CrudApp.func.doDel()
        this.props.doDel(item);
    }
    doUp = (event)=>{
        const {item} = this.props; // <==> const item = this.props.item;
        //부모 콜백 메서드 호출. CrudApp.func.doDel()
        this.props.doUp(item);
    }
    doDown = (event)=>{
        const {item} = this.props; // <==> const item = this.props.item;
        //부모 콜백 메서드 호출. CrudApp.func.doDel()
        this.props.doDown(item);
    }
    doEdit= (event)=>{
        debugger;
        const {item} = this.props; // <==> const item = this.props.item;
        // formEdit가 나오게 설정을 변경한다.
        this.setState({
            ...this.state,
            isEditMode: !this.state.isEditMode
        })
    }
    doSave = (event)=>{
        const {item} = this.props; // <==> const item = this.props.item;

            // ref 를 사용하여 현재 입력된 값을 가져온다.
            //const name = this.refUserName.current.value
            //const power = Number(this.refUserPower.current.value)
            const newitem = {
                id: item.id,
                name: this.refUserName.current.value,
                power: Number(this.refUserPower.current.value),
            }

        //부모 콜백 메서드 호출. CrudApp.func.doSave()
        this.props.doSave(newitem);

        this.setState({
            ...this.state,
            isEditMode: !this.state.isEditMode
        })
    }
    render() { // JSX로 화면 만들기
        const {item} = this.props; // <==> const item = this.props.item;
        let strong = null;
        if( item.power >= 300 ){
            strong = "strong";
        }

        var formEdit = (
            <tr key={item.id} className={"strong"}>
                    <td>{item.id}</td>
                    <td>
                        <input
                            type="text"
                            name="name"
                            ref={this.refUserName }
                            defaultValue={item.name}
                        />
                    </td>
                    <td>
                        <input
                            type="text"
                            name="power"
                            ref={this.refUserPower }
                            defaultValue={item.power}
                        />
                    </td>
                    <td>
                        <button onClick={this.doUp}>Power Up</button>
                        <button onClick={this.doDown}>Power Down</button>
                        <button onClick={this.doSave}>Save</button>
                    </td>
            </tr>
        )

        var formView = (
            <tr className={strong}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.power}</td>
                <td>
                    <button onClick={this.doDel} >Del</button>
                    <button onClick={this.doUp}  >Power Up</button>
                    <button onClick={this.doDown}>Power Down</button>
                    <button onClick={this.doEdit}>Edit</button>
                </td>
            </tr>
        )
debugger;
        if ( this.state.isEditMode) {
            return formEdit
        }else{
            return formView
        }
    }
};
export default CrudListItem;