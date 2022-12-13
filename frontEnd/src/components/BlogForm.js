import React from 'react'
import '../App.css';
function BlogForm() {
    return (
        <div className='mx-5'>
            <form class="" method="post" action="http://localhost:3000/api/blog">
                <fieldset>

                    <div class="form-group">
                        <span class="col-md-1 offset-md-2 text-xs-center"><i class="fa fa-user bigicon"></i></span>
                        <div class="col-md-8">
                            <input id="fname" name="title" type="text" placeholder="Title" class="form-control" />
                        </div>
                    </div>

                    <div class="form-group">
                        <span class="col-md-1 offset-md-2 text-xs-center"><i class="fa fa-user bigicon"></i></span>
                        <div class="col-md-8">
                            <input name="category" type="text" placeholder="Type of Blog" class="form-control" />
                        </div>
                    </div>

                    <div class="form-group">
                        <span class="col-md-1 offset-md-2 text-xs-center"><i class="fa fa-user bigicon"></i></span>
                        <div class="col-md-8">
                            <input name="address" type="text" placeholder="If address required" class="form-control" />
                        </div>
                    </div>

                    <div class="form-group">
                        <span class="col-md-1 offset-md-2 text-xs-center"><i class="fa fa-user bigicon"></i></span>
                        <div class="col-md-8">
                            <input name="budget" type="text" placeholder="budget if any" class="form-control" />
                        </div>
                    </div>

                    <div class="form-group">
                        <span class="col-md-1 offset-md-2 text-xs-center"><i class="fa fa-user bigicon"></i></span>
                        <div class="col-md-8">
                            <input id="lname" name="create_date" type="date" placeholder="Date" class="form-control" />
                        </div>
                    </div>

                    <div class="form-group">
                        <span class="col-md-1 offset-md-2 text-xs-center"><i class="fa fa-user bigicon"></i></span>
                        <div class="col-md-8">
                            <input name="img_src" type="text" placeholder="Enter image url" class="form-control" />
                        </div>
                    </div>
                    

                    <div class="form-group">
                        <span class="col-md-1 offset-md-2 text-xs-center"><i class="fa fa-pencil-square-o bigicon"></i></span>
                        <div class="col-md-8">
                            <textarea class="form-control" id="message" name="blog_data" placeholder="Tell us about your amazing trips and adventures or about anything which can help others in any way" rows="7"></textarea>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="col-md-12 text-xs-center">
                            <button type="submit" class="btn btn-primary btn-lg">Submit</button>
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}

export default BlogForm