document.addEventListener("DOMContentLoaded", function () {
    loadFeedback();
});

function loadSpecials() {

    var feedbackTable = document.getElementById("comments");

    feedbackModule.getFeedback(function (feedbackTable) {
        setupFeedbackTable(feedbackTable);
    });
}

//<li>
//            <div class="comment">
//                <div class="comment-author"><img src="Assets/gravatar.gif" /><a href="/">Author</a></div>
//                <div class="comment-body">
//                    <p>
//                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//                    </p>
//                </div>
//            </div>
//            <ul class="children">
//                <li>
//                    <div class="comment">
//                        <div class="comment-author"><img src="Assets/gravatar.gif" /><a href="/">Author</a></div>
//                        <div class="comment-body">
//                            <p>
//                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//                            </p>
//                        </div>
//                    </div>
//                    <ul class="children">
//                        <li>
//                            <div class="comment">
//                                <div class="comment-author"><img src="Assets/gravatar.gif" /><a href="/">Author</a></div>
//                                <div class="comment-body">
//                                    <p>
//                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//                                    </p>
//                                </div>
//                            </div>
//                        </li>
//                    </ul>
//                </li>
//            </ul>
//        </li>
//        <li style="list-style-type:none;"> <div>Add comment!</div></li>
//        <li>
//            <div class="comment">
//                <div class="comment-author"><img src="Assets/gravatar.gif" /><a href="/">Author</a></div>
//                <div class="comment-body">
//                    <p>
//                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//                    </p>
//                </div>
//            </div>
//        </li>
//        <li>
//            <div class="comment">
//                <div class="comment-author"><img src="Assets/gravatar.gif" /><a href="/">Author</a></div>
//                <div class="comment-body">
//                    <p>
//                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//                    </p>
//                </div>
//            </div>
//            <ul class="children">
//                <li>
//                    <div class="comment">
//                        <div class="comment-author"><img src="Assets/gravatar.gif" /><a href="/">Author</a></div>
//                        <div class="comment-body">
//                            <p>
//                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//                            </p>
//                        </div>
//                    </div>
//                    <ul class="children">
//                        <li>
//                            <div class="comment">
//                                <div class="comment-author"><img src="Assets/gravatar.gif" /><a href="/">Author</a></div>
//                                <div class="comment-body">
//                                    <p>
//                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//                                    </p>
//                                </div>
//                            </div>
//                        </li>
//                        <li>
//                            <div class="comment">
//                                <div class="comment-author"><img src="Assets/gravatar.gif" /><a href="/">Author</a></div>
//                                <div class="comment-body">
//                                    <p>
//                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//                                    </p>
//                                </div>
//                            </div>
//                        </li>
//                    </ul>
//                </li>
//            </ul>
//        </li>
//        <li>
//            <div class="comment">
//                <div class="comment-author"><img src="Assets/gravatar.gif" /><a href="/">Author</a></div>
//                <div class="comment-body">
//                    <p>
//                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//                    </p>
//                </div>
//            </div>
//        </li>