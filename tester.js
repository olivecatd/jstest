document.addEventListener('DOMContentLoaded', function() {
     // Create the new HTML content
    var newContent = `
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0">Ads</h1>
                </div>
            </div>
        </div>
    </div>
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-8">
                    <div class="card card-default">
                        <div class="card-header">
                            <h3 class="card-title">
                                <i class="fas fa-exclamation-triangle"></i>
                                &nbsp;
                                Notice
                            </h3>
                        </div>
                        <div class="card-body">
                            <div class="alert alert-warning alert-dismissible">
                                <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                                <h5><i class="icon fas fa-exclamation-triangle"></i> Note</h5>
                                Kindly make sure to watch our testing videos.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>`;

    // Append the new content to the .content-wrapper
    var contentWrapper = document.querySelector('.content-wrapper');
    
    if (contentWrapper) {
        contentWrapper.insertAdjacentHTML('afterbegin', newContent);
    }
});
