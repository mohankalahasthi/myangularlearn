import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-arrayoperations",
  templateUrl: "./arrayoperations.component.html",
  styleUrls: ["./arrayoperations.component.scss"]
})
export class ArrayoperationsComponent implements OnInit {
  a:any= [1,2,3,4];
  arr: any = [1, 2, 3, 4, [5], [6]];
  arrred1 = [2, 5, 1, 9, 6];
  arrmap = [1000, 4000, 9000, 16000]; //map
  arrayobj = [
    { id: 1, name: "pradeep", place: "rjy" },

    {
      id: 2,
      name: "varun",
      place: "kkd"
    },
    {
      id: 3,
      name: "jai",
      place: "vskp"
    },
    {
      id: 4,
      name: "ram",
      place: "vskp"
    }
  ];
  arraystrs = ["j", "a", "v", "a", "s", "c", "r", "i", "p", "t"];
  arrayobj2 = [{ age: 18, name: "peter" }, { age: 23, name: "pant" }];
  constructor() {
    // this.mapdemo();
    }

  ngOnInit() {}

  // map
  mapdemo() {
    // let arraymap1 = this.arrmap.map(num => num / 200);
    // let arraymap1 =  console.log(arraymap1);
    let arraymap1 = this.arrmap.map(function(ele) {
      console.log(ele);
      return ele / 200;
    });
    console.log(arraymap1);
  }

  foreachdemo() {
    var arrobjId = [];
    this.arrayobj.forEach(function(ids) {
      console.log(ids);
      arrobjId.push(ids.id);
      console.log(arrobjId);
    });
  }

  mapdemo2() {
    var arrobjId1 = this.arrayobj.map(function(obj) {
      // console.log(obj);
      // console.log(obj.id);
      return obj.id;
    });
    console.log(arrobjId1);
  }

  forEachDemo2() {
    this.arrayobj.forEach(function(obj) {
      console.log(obj);
      if (obj.place === "vskp") {
        console.log(obj.name);
      }
    });
  }
  filterDemo() {
    var newArr = this.arrayobj.filter(function(obj) {
      if (obj.place === "vskp") {
        return obj;
      }
    });
    console.log(newArr);
  }

  mapManipulateObj() {
    var newArry = this.arrayobj.map(function(obj) {
      if (obj.place === "vskp") {
        obj.place = "vishakapatnam";
      }
      return obj;
    });
    console.log(newArry);
  }

  reduceArr() {
    let newArr = this.arr.reduce((prev, curr) => {
      console.log(prev);
      console.log(curr);
      return prev.concat(curr);
    }, []);
    console.log(newArr);
  }
  reduceArr1() {
    //    arrred1 = [2,5,1,9,6];
    let newarr = this.arrred1.reduce((num1, num2) => {
      console.log(num1);
      console.log(num2);
      return num1 + num2;
    });
    console.log(newarr);
  }
  reduceArr2() {
    let newarr = this.arraystrs.reduce((str1, str2) => {
      console.log(str1);
      console.log(str2);
      return str1 + str2;
    }, "Test ");
    console.log(newarr);
  }
  reduceArr3() {
    let newarr = this.arrayobj2.reduce((obj1, obj2) => {
        console.log(obj1);
        console.log(obj2);
        return obj1 + obj2.age; 
    }, 0)
    // If initialValue isn't provided, reduce() will execute the callback function starting at index 1, skipping the first index. If initialValue is provided, it will start at index 0.
      console.log(newarr);
  } 
}
