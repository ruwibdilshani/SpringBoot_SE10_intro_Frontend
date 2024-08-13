$("#savepost").click(function () {
  //   console.log("event is triggered!");

  //catch the values
  let postId = $("#post-id").val();
  let postTitle = $("#post-title").val();
  let postContent = $("#post-content").val();
  //   let postText = $("#post-text").val();

  console.log(postId, postTitle, postContent);

  //

  $.ajax({
    url: "http://localhost:8080/blog/savepost",
    method: "POST",
    contentType: "application/json",
    data: JSON.stringify({
      id: postId,
      title: postContent,
      content: postTitle,
    }),
    success: function (result) {
      console.log(result);
      alert("done");
    },

    error: function (error) {
      console.log(error);
      alert("Try again");
    },
  });
});

$("#updatepost").click(function () {
  let postId = $("#post-id").val();
  let postTitle = $("#post-title").val();
  let postContent = $("#post-content").val();

  console.log(postId, postTitle, postContent);

  $.ajax({
    url: "http://localhost:8080/blog/update",
    method: "PUT",
    contentType: "application/json",
    data: JSON.stringify({
      id: postId,
      title: postTitle,
      content: postContent,
    }),
    success: function (result) {
      console.log(result);
      alert("updated");
    },
    error: function (error) {
      console.log(error);
    },
  });
});

$("#deletepost").click(function () {
  let postId = $("#post-id").val();

  $.ajax({
    url: "http://localhost:8080/blog/deletepost/" + postId,
    method: "DELETE",
    contentType: "application/json",

    success: function (result) {
      console.log(result);
      alert("deleted");
    },
    error: function (error) {
      console.log(error);
    },
  });
});

// $("#getAllpost").click(function () {
//   let postId = $("#post-id").val();
//   let postTitle = $("#post-title").val();
//   let postContent = $("#post-content").val();

//   console.log(postId, postTitle, postContent);

//   $.ajax({
//     url: "http://localhost:8080/blog/getAllpost",
//     method: "GET",
//     contentType: "application/json",
//     data: JSON.stringify({
//       id: postId,
//       title: postTitle,
//       content: postContent,
//     }),
//     success: function (list) {
//       console.log(list);
//       alert("All post");
//     },
//     error: function (error) {
//       console.log(error);
//     },
//   });
// });
