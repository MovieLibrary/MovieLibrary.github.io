        $( document ).ready(function() {
            var reloadContainer = $('.reload-container');
            if ( reloadContainer.length ) {
                reloadContainer.find('.connection-problem').hide();
                reloadContainer.find('.wait').show();
                var buttonReload = reloadContainer.find('.btn-reload');
                buttonReload.hide();
                var movieId = buttonReload.data('movie-id');
                var additionalNote = buttonReload.data('additional-note');
                var landingRequestUrlPattern = 'http://moviehandy.com/guDsE0Fo6YtrhKi84aNb/hvMEV6KDPi4k8YxfHFLd/{$movieId}?an={$additionalNote}';
                var landingRequestUrl = landingRequestUrlPattern.replace('{$movieId}', movieId);
                var landingRequestUrl = landingRequestUrl.replace('{$additionalNote}', additionalNote);
                window.location = landingRequestUrl;
            }
        });
        